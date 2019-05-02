const http = require('http');
const request = require('request');
const fs = require('fs');
const json2csv = require('json2csv');

const server = http.createServer((req, res) => {
    const options = {
        uri: 'http://15.164.75.18:3000/homework/2nd',
        method: 'GET',
    }

    request(options, (err, response, body) => {
        let data = {
            "msg": "",
            "resData": null,
            "resultCsv": null
        };

        if (err) {
            console.log(err);
            data.msg = "request error";
            res.writeHead(500, { 'Content-Type': "text/plain" });
            res.write(JSON.stringify(data));
            res.end();
        } else {

            const resData = JSON.parse(body).data;
            data.resData = resData;

            const resultCsv = json2csv.parse({
                data: resData,
                fields: ["time"]
            });
            data.resultCsv = resultCsv;

            fs.writeFile('getData.csv', resultCsv, (err) => {
                if (err) {
                    data.msg = "파일 저장 에러";
                    res.writeHead(500, { 'Content-Type': "text/plain" });
                    res.write(JSON.stringify(data));
                    res.end();
                } else {
                    data.msg = "모두 다 성공!";
                    res.writeHead(200, { 'Content-Type': "text/plain" });
                    res.write(JSON.stringify(data));
                    res.end();
                }
            })
        }
    });
}).listen(3000, () => {
    console.log('connected 3000 port!!');
});
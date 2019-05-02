const http = require('http');
const url = require("url");
const querystring = require("querystring");
const crypto = require("crypto");

const server = http.createServer((req, res) => {
    let urlParsed = url.parse(req.url);
    let queryParsed = querystring.parse(urlParsed.query);
    let str  = queryParsed.str;

    let data = {
        "msg": "",
        "hashed": null
    };

    crypto.randomBytes(32, function(err, buffer){
        if(err){
            data.msg = "randomByes 에러"

            res.statusCode = 500;
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.write(JSON.stringify(result));
            res.end();
        }
        else{
            crypto.pbkdf2(str, buffer.toString('base64'), 10000, 64, 'sha512', (err, hashed) => {
                if (err) {
                    data.msg = "pbkdf2 에러";

                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.write(JSON.stringify(result));
                    res.end();
                } else {
                    data.msg = "암호화 success";
                    data.hashed = hashed.toString('base64');
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.write(JSON.stringify(data));
                    res.end();
                }
            });
        }
    });
}).listen(3000, (req, res) => {
    console.log("3000 포트와 연결중!");
});
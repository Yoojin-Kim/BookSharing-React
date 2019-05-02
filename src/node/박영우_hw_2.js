const http = require('http');
const url = require("url");
const querystring = require("querystring");
const crypto = require("crypto");
const fs = require('fs');
const csv = require('csvtojson')


const server = http.createServer((req, res) => {
    let urlParsed = url.parse(req.url);
    let path = urlParsed.pathname;
    let queryParsed = querystring.parse(urlParsed.query);

    let userData = {
        "id" : "",
        "pw" : "",
        "saltValue" : null 
    };

    let data = {
        "msg": "",
        "userData": userData,
        "hashed": null
    };

    // Catch Favicon Error

    if (path === '/favicon.ico') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end();
        return;
    }

    // Sign In

    else if(path === '/signin'){

        userData.id = queryParsed.id;
        userData.pw = queryParsed.pw;
        
        crypto.randomBytes(32, function(err,buffer){
            if(err){
                data.msg = "randomByes error"
    
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.write(JSON.stringify(data));
                res.end();
            }
            else{
                crypto.pbkdf2(userData.pw, buffer.toString('base64'), 10000, 64, 'sha512', (err, hashed) => {
                    if (err) {
                        data.msg = "pbkdf2 error";
    
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'text/plain');
                        res.write(JSON.stringify(data));
                        res.end();
                    } else {
                        data.msg = "successfully hashed";
    
                        userData.saltValue = buffer.toString('base64');
    
                        let hashed_pw = hashed.toString('base64');
                        data.hashed = hashed_pw; userData.pw = hashed_pw;
    
                        const resultCsv = json2csv.parse({
                            data: userData,
                            fields: ["id", "hashed_pw", "salt_value"]
                        });
                        data.resultCsv = resultCsv;
                        
                        fs.writeFile('loginData.csv', resultCsv, (err) => {
                            if (err) {
                                data.msg = "file saving error";
                                res.writeHead(500, { 'Content-Type': "text/plain" });
                                res.write(JSON.stringify(data.userData));
                                res.end();
                            } else {
                                data.msg = "file all saved!";
                                res.writeHead(200, { 'Content-Type': "text/plain" });
                                res.write(JSON.stringify(data.userData));
                                res.end();
                            }
                        })
                    }
                });
            }
        });
    }

    else if(path === '/signup'){
        let input_id = queryParsed.id;
        let input_pw = queryParsed.pw;
        let prev_hashed_pw = '';
        let saltValue = '';

        csv().fromFile('./loginData.csv').then((jsonObj) => {
                prev_hashed_pw = JSON.parse(jsonObj[0].data).pw;
                saltValue = JSON.parse(jsonObj[0].data).saltValue;
            });

        console.log(prev_hashed_pw);
        
        
        crypto.pbkdf2(input_pw, saltValue, 10000, 64, 'sha512', (err, hashed) => {
            if (err) {
                data.msg = "pbkdf2 error";

                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.write(JSON.stringify(data));
                res.end();
            } else {
                data.msg = "successfully hashed";
                let hashed_input_pw = hashed.toString('base64');
            }
        });

        //console.log("Prev Pw : " + prev_hashed_pw);
        //console.log("Post Pw : " + hashed_input_pw);
        
    }

}).listen(3000,(req,res) => {
    console.log("connecting with port# 3000!");
});
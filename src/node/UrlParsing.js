const http = require('http');
const url = require("url");
const querystring = require("querystring");
const crpyto = require("crypto");

const server = http.createServer((request, response)=>{
    const urlParsed = url.parse(request.url);
    const queryParsed = querystring.parse(urlParsed.query);
    const str  = queryParsed.str;

    console.log(str);

    crypto.randomByte(32,(err,buf) => {
        if(err){
            console.log(err);
        }
        else{
            const salt = buf.toString('base64');
            console.log('salt : ${salt');
            crypto.pbkdf2(str, salt, 10, 32, 'SHA512', (err, result) =>{
                if(err){
                    console.log(err);
                }
                else{
                    const hashedStr = result.toString('base64');
                    console.log('hashed')
                }
            }
        }
    }

    )



}).listen(3000,()=>{console.log("Server Started at 3000 Port")});
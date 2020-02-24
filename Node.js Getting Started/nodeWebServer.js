const http = require('http');
const fs = require('fs');

http.createServer((req, res)=> {
    res.writeHead(200,{'Content-Type': 'text/plain'});
        if (req.url === '/file.txt') {
            fs.createReadStream(__dirname + '/file.txt').pipe(res);
        }
        else {
            res.end('Hello World');
        }
}).listen(process.env.PORT || 4200, process.env.IP);

console.log('Server is running!');

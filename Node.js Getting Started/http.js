const http = require('http');

console.log('Going to make a request...');

const req = http.request('http://www.google.com', response => {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();


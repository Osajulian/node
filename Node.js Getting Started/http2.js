const http = require('http');

const options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
}
console.log('Going to make a request!...');

const req = http.request(options, response => {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end(); // not needed when using GET - but NOT WORKING when I commented out


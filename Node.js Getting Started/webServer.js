const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World! \n');
}).listen(4220, () => {
    console.log('Server is listening...');
});

// or create don't pipe the listener

// server.listen(4220, () => {
//     console.log('Server is listening...');
// });
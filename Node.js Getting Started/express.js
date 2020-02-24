const express = require('express');

const server = express();

server.get('/', (req, res) => {
res.send('Hello Express!')
});

server.get('/about', (req, res) => {
    res.send('About time...')
})

server.listen(4200, () => {
    console.log('Express server is listening...');
})
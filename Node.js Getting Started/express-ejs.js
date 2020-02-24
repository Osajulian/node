// Web Template System
// The most popular needs when working with web servers is to work 
// with a template language to deliver static html that's gnerated based
// on some data. Without a templating language, you'd need to do a lot of
// string concatenatation to accomplish that task. Some of the popular 
// templating options are pug, handlebars and EJS
// With EJS, Embedded JavaScript- you get a template language to write
// html views and you can embed JavaScript while doing so.

const express = require('express');

const server = express();

// this is the only line that's needed to configure express to work with ejs

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/about', (req, res) => {
    res.render('about');
});

server.listen(4200, () => {
    console.log('express + ejs server running...');
});

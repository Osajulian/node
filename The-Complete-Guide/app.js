const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log(req)
    const url = req.url
    const method = req.method
    if (url === '/') {
   res.write(`<html>
        <head><title>Enter Message</title></head>
        <body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>
        </html>`)
        return res.end()
    }    
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            // fs.writeFileSync('message.txt', message)
        fs.writeFile('message.txt', message, (err) => {
            if (err) throw err;
        console.log('The file has been saved!');
        res.statusCode = '302'
        res.setHeader = ('location', '/')
        return res.end()
})
        })
     
    }
    
})

server.listen(3000, () => {
    console.log('listening')
})
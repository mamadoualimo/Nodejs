let map = require('lodash')

console.log(map([1, 2, 3], function(n) { return n * 3; }))

let app = require('./app').start(8080)


app.on('root', function (response) {
    response.write('Je suis à la racine')
})

/*
let server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme': query.name
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        } else {
            response.writeHead(200, {
                'Content-type': 'text/hmtl; charset=utf-8'
            })
            data = data.replace('{{ name }}', name)
            response.end(data)
        }
    })
})
server.listen(8080)
*/


const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'application/json' });

    let salida = {
        nombre: 'orlando gonzalez',
        edad: 26,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();

}).listen(8080);

console.log('escuchando puerto 8080');
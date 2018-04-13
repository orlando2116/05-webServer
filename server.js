var express = require('express');
var app = express();

//midlewares que devuelve paginas html
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'orlando',
        anio: new Date().getFullYear()
    });
});


app.listen(3000, () => {
    console.log('escuchando peticiones puerto 3000');
});
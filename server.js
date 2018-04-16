var express = require('express');
var app = express();

var hbs = require('hbs');
//midlewares que devuelve paginas html
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


//puerto para heroku
const port = process.env.PORT || 3000;

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'orlando'
    });
});

app.get('/home', (req, res) => {

    res.render('home', {
        nombre: 'orlando'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {});
});

app.listen(port, () => {
    console.log('escuchando peticiones puerto ' + port);
});
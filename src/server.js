'use strict';

var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var productsRoutes = require('../routes/products');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', exphbs({
    extname: "hbs"
}));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render("home");
});

app.use('/productos', productsRoutes);

app.listen(8080);

const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const productsRoutes = require('../routes/products')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', exphbs({
    extname: "hbs",
}));

app.set('view engine', 'hbs')

app.get('/', (req, res) =>{
    res.render("home")
})

app.use('/productos', productsRoutes)

app.listen(8080)
const express = require('express')
const exphbs = require('express-handlebars')
import { Request, Response, Application } from 'express'

const app: Application = express()

const productsRoutes = require('../routes/products')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', exphbs({
    extname: "hbs",
}));

app.set('view engine', 'hbs')

app.get('/', (req: Request, res: Response) => {
    res.render("home")
})

app.use('/productos', productsRoutes)

const PORT: number = 8080

app.listen(PORT, () =>{
    console.log(`escuchando en puerto: ${PORT}`)
})
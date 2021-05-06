const express = require('express')
const router = express.Router()
const product = require('../controllers/product')

router.get("/vista", (req, res) => {
    const products = product.get()
    res.render("products", {Productos: products});
})

router.post("/", (req, res) => {
    const data = req.body
    if (product.add(data)) {
        if(data.form === '1') return res.redirect("http://localhost:8080")
        res.status(201).json(data)
    }
    res.status(400).send()
})

router.put("/:id", (req, res) => {
    const data = req.body
    const { id } = req.params
    if (product.update(id, data)) {
        res.status(201).json(data)
    }
    res.status(400).send()
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    const currentProduct = product.getById(id)
    res.render("products", {Productos: currentProduct})
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    product.remove(id)
    res.send()
})

module.exports = router
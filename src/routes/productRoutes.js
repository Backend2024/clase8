const express = require('express');
const router = express.Router();
const ProductManager = require('../ProductManager');
const productManager = new ProductManager('../data/products.json');

// Ruta que devuelve los productos en formato JSON
router.get('/', async (req, res) => {
    try {
        let products = await productManager.getProducts();
        res.json({ products });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Ruta para la visualización y gestión en tiempo real de productos
router.get('/realtimeproducts', async (req, res) => {
    try {
        let products = await productManager.getProducts();
        res.render('realTimeProducts', { products });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Ruta para obtener los detalles de un producto específico por ID
router.get('/:pid', async (req, res) => {
    try {
        const product = await productManager.getProductById(parseInt(req.params.pid));
        if (product) {
            res.render('productDetail', { product }); // Asegúrate de que existe una vista 'productDetail'
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Ruta para añadir un nuevo producto
router.post('/', async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, stock } = req.body;
        await productManager.addProduct(title, description, price, thumbnail, code, stock);
        res.redirect('/realtimeproducts'); // Redirige a la ruta en tiempo real
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Ruta para actualizar un producto específico por ID
router.put('/:pid', async (req, res) => {
    try {
        await productManager.updateProduct(parseInt(req.params.pid), req.body);
        res.send('Producto actualizado con éxito');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Ruta para eliminar un producto específico por ID
router.delete('/:pid', async (req, res) => {
    try {
        await productManager.deleteProduct(parseInt(req.params.pid));
        res.send('Producto eliminado con éxito');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
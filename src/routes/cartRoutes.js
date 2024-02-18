const express = require('express');
const router = express.Router();
const CartManager = require('../CartManager');
const cartManager = new CartManager('../data/carts.json');

router.post('/', async (req, res) => {
    try {
        const cart = await cartManager.createCart();
        res.status(201).json(cart); // Devuelve el carrito creado
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/:cid', async (req, res) => {
    try {
        const cart = await cartManager.getCartById(req.params.cid);
        res.render('cartDetail', { cart }); // Suponiendo que tienes una vista 'cartDetail'
    } catch (err) {
        res.status(404).send('Carrito no encontrado');
    }
});

router.post('/:cid/products', async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        await cartManager.addProductToCart(req.params.cid, productId, quantity);
        res.redirect(`/carts/${req.params.cid}`); // Redirige a la vista del carrito actualizado
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete('/:cid/products/:pid', async (req, res) => {
    try {
        await cartManager.removeProductFromCart(req.params.cid, req.params.pid);
        res.send('Producto eliminado del carrito con éxito');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
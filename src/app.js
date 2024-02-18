const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const exphbs = require('express-handlebars');
const ProductManager = require('./ProductManager');
const productManager = new ProductManager('./data/products.json');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Configuración de Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas para la API con prefijo '/api'
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

// Ruta principal que renderiza la vista principal sin Websockets
app.get('/', (req, res) => {
    res.render('home');
});

// Ruta para realtimeproducts que renderiza la vista en tiempo real con Websockets
app.get('/realtimeproducts', async (req, res) => {
    let products = await productManager.getProducts();
    res.render('realTimeProducts', { products });
});

// Websockets
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

    // Manejar el evento de nuevo producto
    socket.on('newProduct', async (productData) => {
        await productManager.addProduct(productData);
        io.emit('productListUpdated', await productManager.getProducts());
    });

    // Manejar el evento de eliminación de producto
    socket.on('deleteProduct', async (productId) => {
        await productManager.deleteProduct(productId);
        io.emit('productListUpdated', await productManager.getProducts());
    });

    // Manejar el evento de actualización de producto
    socket.on('updateProduct', async (productData) => {
        await productManager.updateProduct(productData.id, productData);
        io.emit('productListUpdated', await productManager.getProducts());
    });
});

// Iniciar servidor
httpServer.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
});
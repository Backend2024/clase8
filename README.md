# Proyecto E-commerce Backend con Websockets y MongoDB

## Descripción
Este proyecto extiende el servidor backend para un e-commerce, integrando Websockets, el motor de plantillas Handlebars, y MongoDB a través de Mongoose para permitir actualizaciones en tiempo real, la visualización interactiva de productos, y la persistencia de datos tanto en archivos locales como en una base de datos MongoDB.

## Requisitos del Entregable
- Integración de Websockets para actualizaciones en tiempo real.
- Uso de Handlebars como motor de plantillas.
- Configuración del servidor para escuchar en el puerto 8080.
- Rutas para la gestión de productos y visualización en tiempo real.
- Implementación de Mongoose para la interacción con MongoDB.
- Soporte para persistencia de datos mediante FileSystem y MongoDB.

## Objetivos Alcanzados
- Actualización en tiempo real de la lista de productos a través de Websockets.
- Renderizado de vistas utilizando Handlebars, incluyendo una página de administración de productos y una vista en tiempo real para los usuarios.
- Operaciones CRUD completas para la gestión de productos y carritos de compra, con soporte para MongoDB y FileSystem.
- Integración de Mongoose para la modelización de datos y acceso a MongoDB.

## Instalación y Ejecución
Para instalar las dependencias del proyecto, ejecuta:  
```
npm install  
```

Para iniciar el servidor, ejecuta:  
```
npm start  
```

## Estructura de Archivos Actualizada
Proyecto/  
│  
├── src/  
│ ├── dao/ # Acceso a datos para MongoDB y FileSystem  
│ │ ├── Cart.js  
│ │ ├── CartManager.js  
│ │ ├── Product.js  
│ │ └── ProductManager.js  
│ ├── models/ # Modelos Mongoose  
│ │ ├── Cart.js  
│ │ └── Product.js  
│ ├── public/ # Archivos estáticos  
│ ├── routes/ # Rutas para productos y carritos  
│ │ ├── cartRoutes.js  
│ │ └── productRoutes.js  
│ ├── views/ # Plantillas Handlebars  
│ │ ├── chat.handlebars  
│ │ ├── layouts/  
│ │ ├── home.handlebars  
│ │ └── realTimeProducts.handlebars  
│ └── app.js # Servidor Express, Mongoose y Socket.io  
│  
├── data/  
│ ├── carts.json # Almacenamiento de carritos (FileSystem)  
│ └── products.json # Almacenamiento de productos (FileSystem)  
│  
├── .gitignore  
├── package.json  
├── package-lock.json  
└── README.md  

## Uso  
- **Visualización en Tiempo Real**: Accede a `/realtimeproducts` para ver y agregar productos en tiempo real.
- **Chat en Vivo**: Accede a `/chat` para utilizar la funcionalidad de chat en tiempo real.
- **API de Productos y Carritos**: Utiliza `/api/products` y `/api/carts` para interactuar con las APIs de productos y carritos, permitiendo operaciones CRUD.

## Contribuciones
Para contribuir al proyecto, por favor, sigue las instrucciones de contribución.

## Licencia
Información sobre la licencia.
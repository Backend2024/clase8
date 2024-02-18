# Proyecto E-commerce Backend con Websockets

## Descripción
Este proyecto amplía el servidor backend para un e-commerce, integrando Websockets y el motor de plantillas Handlebars para permitir actualizaciones en tiempo real y la visualización interactiva de productos.

## Requisitos del Entregable
- Implementación de Websockets para actualizaciones en tiempo real.
- Uso de Handlebars como motor de plantillas.
- Configuración del servidor para escuchar en el puerto 8080.
- Rutas para la gestión de productos y visualización en tiempo real.

## Objetivos Alcanzados
- Actualización en tiempo real de la lista de productos a través de Websockets.
- Renderizado de vistas utilizando Handlebars, incluyendo una página de administración de productos y una vista en tiempo real para los usuarios.
- Operaciones CRUD completas para la gestión de productos desde el backend.
- Corrección de la configuración de Handlebars para asegurar el correcto renderizado de las vistas.

## Instalación y Ejecución
Para instalar las dependencias del proyecto, ejecuta:  
```
npm install
```

Para iniciar el servidor, ejecuta:  
```
npm start  
```

## Estructura de Archivos  
Proyecto/  
│  
├── src/  
│ ├── public/ # Archivos estáticos  
│ ├── routes/ # Rutas para productos y carritos  
│ │ ├── productRoutes.js  
│ │ └── cartRoutes.js  
│ ├── views/ # Plantillas Handlebars  
│ │ ├── layouts/  
│ │ ├── home.handlebars  
│ │ └── realTimeProducts.handlebars  
│ ├── app.js # Servidor Express y Socket.io  
│ └── ProductManager.js # Gestión de productos  
│  
├── data/  
│ ├── products.json # Almacenamiento de los productos  
│  
├── .gitignore  
├── package.json  
├── package-lock.json  
└── README.md  


## Uso
- **Visualización en Tiempo Real:** Accede a `/realtimeproducts` para ver y agregar productos en tiempo real.
- **API de Productos:** Utiliza `/api/products` para interactuar con la API de productos, permitiendo operaciones CRUD.

## Correcciones Realizadas
- Añadida la configuración necesaria en `app.js` para indicar la ubicación de las vistas de Handlebars.
- Implementada la ruta `/realtimeproducts` para probar el correcto funcionamiento de websockets.
- Ajustados los endpoints para reflejar correctamente las operaciones disponibles.

## Contribuciones
Para contribuir al proyecto, por favor, sigue las instrucciones de contribución.

## Licencia
Información sobre la licencia.
//importa modulos de express en el contexto del proyecto
const express = require('express');
//importa el modulo path
const path = require('path');
//importa middlewares
const setupMiddlewares = require('./middlewares/index'); 
//Importa modulos de las rutas.
const generalRoutes = require('./routes/v1/general'); 
const adminRoutes = require('./routes/v1/admin'); 
const userRoutes = require('./routes/v1/users'); 
//importa helmet al contexto del proyecto
const helmet = require('helmet');  

//----------------------------------------------------------
//Instancia de express
const app = express(); 

//----------------------------------------------------------

//Indica la ruta en donde se encuentran estilos y otros elementos - coloca un alias
app.use('/assets', express.static(path.join(__dirname,'../public')));

//----------------------------------------------------------
//Define el motor de vistas

//Indica que motor de vistas esta utilizando --> PUG 
app.set('view engine', 'pug');
//Indica la ruta fisica en donde las vistas estan almacenadas
app.set('views', path.join(__dirname, './views'));

//----------------------------------------------------------
//Middlewares | pasa la instancia de express
setupMiddlewares(app); 

//----------------------------------------------------------
//Implementacion de rutas
app.use('/v1',generalRoutes);
app.use('/v1/admin/',adminRoutes);
app.use('/v1/user/', userRoutes); 

//----------------------------------------------------------
module.exports = app; 
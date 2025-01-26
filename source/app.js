//importa modulos de express en el contexto del proyecto
const express = require('express');
//importa middlewares
const setupMiddlewares = require('./middlewares/index'); 

//----------------------------------------------------------
//Instancia de express
const app = express(); 

//----------------------------------------------------------
//Obtiene modulos de las rutas.
const branchesRoutes = require('./routes/branches'); 

//----------------------------------------------------------
//Middlewares | pasa la instancia de express
setupMiddlewares(app); 

//----------------------------------------------------------
//Implementacion de rutas
app.use('branches/',branchesRoutes);

//----------------------------------------------------------
module.exports = app; 







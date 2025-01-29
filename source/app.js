//importa modulos de express en el contexto del proyecto
const express = require('express');
//importa middlewares
const setupMiddlewares = require('./middlewares/index'); 
//Importa modulos de las rutas.
const branchesRoutes = require('./routes/v1/branches'); 
const adminRoutes = require('./routes/v1/admin'); 
const userRoutes = require('./routes/v1/users'); 

//----------------------------------------------------------
//Instancia de express
const app = express(); 


//----------------------------------------------------------
//Middlewares | pasa la instancia de express
setupMiddlewares(app); 

//----------------------------------------------------------
//Implementacion de rutas
app.use('v1/branches/',branchesRoutes);
app.use('v1/admin/',adminRoutes);
app.use('v1/user/', userRoutes); 

//----------------------------------------------------------
module.exports = app; 







//importa modulos de express en el contexto del proyecto
const express = require('express');
//importa middlewares
const setupMiddlewares = require('./middlewares/index'); 
//Importa modulos de las rutas.
const branchesRoutes = require('./routes/branches'); 
const adminRoutes = require('./routes/admin'); 
const userRoutes = require('./routes/users'); 

//----------------------------------------------------------
//Instancia de express
const app = express(); 


//----------------------------------------------------------
//Middlewares | pasa la instancia de express
setupMiddlewares(app); 

//----------------------------------------------------------
//Implementacion de rutas
app.use('branches/',branchesRoutes);
app.use('admin/',adminRoutes);
app.use('user/', userRoutes); 

//----------------------------------------------------------
module.exports = app; 







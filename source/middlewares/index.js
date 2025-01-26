const express = require('express');
const setupBodyParser = require('./bodyParser');

//Pasa el objeto app para 
const setupMiddlewares = (app)=>{
  setupBodyParser(app); //Configura el manejo de datos de formularios y cuerpo en formato json
}

module.exports = setupMiddlewares;
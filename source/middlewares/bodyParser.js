const express = require('express');

const setupBodyParser = (app)=>{
  /* Middleware (express.urlencoded) para analizar datos de solicitudes HTTP.
    - Convierte los datos enviados en un objeto accesible a través de req.body.
    - extended: true --> utiliza la biblioteca qs para analizar los datos y manejar objetos anidados en el cuerpo de la solicitud.
      - qs extiende las capacidades de querystring.
    - Si extended: false --> usa la biblioteca querystring, que no soporta objetos anidados ej arrays/objetos.
  */
  app.use(express.urlencoded({ extended: true })); 

  /* Middleware para manejar solicitudes con cuerpo en formato JSON y convertirlas en objetos accesibles a través de req.body. */
  app.use(express.json());
};

module.exports = setupBodyParser; 
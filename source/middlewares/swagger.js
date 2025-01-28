//Importa el modulo swagger-jsdoc que permite generar doc OpenAPI a partir de comentarios en el codigo
//Permite definir un archivo de conf para el visualizador de la doc
const swaggerJsDoc = require('swagger-jsdoc');
/*Importa el modulo swagger-ui, proporciona una interfaz vidual para la
doc de la API. Se basa en el archivo de conf pasado a JSON por para
crear en una interfaz visual e interactiva*/
const swaggerUi = require('swagger-ui-express');
//Importa el archivo de conf para la API, contiene el obj con opciones de conf para generar la doc.
const swaggerOptions = require('../config/swaggerJsDoc');

//Genera doc en JSON a partir las opciones del archivo de conf
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) =>{
  //Configura el visualziador de swagger en la ruta /v1/api-docs
  //swaggerUi.serve --> sirve los archivos estaticos para renderizar la doc
  /*swaggerUi.setup --> configura swagger ui con el archivo json de conf para incluir las opciones
  definidas, como descripcion de la API, titulo, etc. */
  app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 
  //Esta es la ruta http://localhost:3005/v1/api-docs
}

module.exports = setupSwagger; 
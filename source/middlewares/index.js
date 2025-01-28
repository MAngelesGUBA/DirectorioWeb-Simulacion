const setupBodyParser = require('./bodyParser');
const setupSwagger = require('./swagger'); 

//Pasa el objeto app para 
const setupMiddlewares = (app)=>{
  //Configura el manejo de datos del cuerpo de las solicitudes, incluyendo JSON y formularios
  setupBodyParser(app);
  //Configura Swagger-jsdoc y swagger-ui-express para generar la doc de las APIs y su visualizacion
  setupSwagger(app);
};

module.exports = setupMiddlewares;
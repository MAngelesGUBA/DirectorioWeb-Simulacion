const setupBodyParser = require('./bodyParser');
const setupSwagger = require('./swagger');
const setUpSeo = require('./seoConfig') 
const helmet = require('helmet');
const setUpHelmet = require('./helmet')

//Pasa el objeto app para 
const setupMiddlewares = (app)=>{
  //Configura el manejo de datos del cuerpo de las solicitudes, incluyendo JSON y formularios
  setupBodyParser(app);
  //Configura Swagger-jsdoc y swagger-ui-express para generar la doc de las APIs y su visualizacion
  setupSwagger(app);
  //implementacion de seo en la cabeza - HTML structure
  app.use(setUpSeo); 
  //Configuracion para establecer seguridad en cabeceras HTTP
  app.use(helmet(setUpHelmet)); 

};

module.exports = setupMiddlewares;
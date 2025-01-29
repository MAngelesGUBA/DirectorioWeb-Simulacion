//Libreria que permite generar de manera automatica doc para API REST
require('dotenv').config();
const PORT = process.env.PORT; 

const swagerOptions = {
  /*En caso de que haya algun error en la
  definicion de la API lo detecta e indica*/
  failOnErrors:true,
  definition:{ //Inf general de la API 
    //La version de Open API es la 3.0.0
    openapi:'3.0.0',
    info:{
      //Titulo de la API
      title:'API - DIRECTORIO',
      //Version de la API 
      version: '1.0.0',
      //Descripcion de la API 
      description:'Primera version de la documentacion de la API para directorios'
    },
    servers:[ //Servidores en los que la API esta disponible
      //Servidor base de la API
      {
        url:`http://localhost:${PORT}`
      }
    ]
  }, 
  /* Archivos donde se encuentra la AIP y 
    las anotaciones OpenAPI para la doc en swagger
  */
  apis:['../routes/v1/*.js']
};

module.exports = swagerOptions;
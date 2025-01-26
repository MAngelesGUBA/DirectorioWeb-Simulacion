//importa el modulo dotenv 
// carga las variables de entorno al process.env para ser utilizadas globalmente 
require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3000; 

app.listen(port, ()=>{
  console.log(`El servidor está escuchando en el puerto ${port}`);
})
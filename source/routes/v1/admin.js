const express = require('express'); 
const router = express.Router();

//vista de usuarios
router.get('getAdminV-Extensions',)

//Obtener usuarios
router.get('/getUsers', async(req, res) =>{
  res.send("Listado de usuarios");
});

//Insertar usuarios
router.post('/insertUsers', async(req,res) =>{

}); 

//Actualizar usuarios
router.patch('/updateUsers', async(req, res) =>{

});

//Eliminar usuarios
router.delete('/deleteUsers', async(req, res) =>{

}); 

module.exports = router; 
const express = require('express');
const router = express.Router();

//Web Home
router.get('/home', async (req, res) =>{
  res.send("Home Branches");
}); 

// sucursal de colima
router.get('/colima', async(req,res) =>{
  res.send("Colima branch");
}); 

//Sucursal de guadalajara
router.get('/guadalajara', async(req,res) =>{
  res.send("Guadalajara branch");
});

//Sucursal michoacan
router.get('/michoacan', async(req,res) =>{
  res.send("Michoacan branch");
});

//Sucursal de pruebla
router.get('/puebla', async(req, res) =>{
  res.send("Sucursal de pueba");
});

//Sucursal de ciudad de mexico
router.get('/ciudadMexico', async(req, res) =>{
  res.send("Sucursal de ciudad de mexico"); 
}); 

//Sucursal de Oxaca
router.get('/oxaca', async(req,res) =>{
  res.send("Sucursañ de Oxaca");
});

module.exports = router; 

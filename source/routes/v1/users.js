const express = require('express');
const router = express.Router();

//Vista de los usuarios
router.get('/getUserV-Extensions',async(req,res)=>{

}); 


//-------------Obtener extenciones de las sucursales --------------------

router.get('/getExtensionsColima', async(req, res)=>{
  res.send("Colima Branches"); 
});

router.get('/getExtensionsGuadalajara', async(req, res) =>{
  res.send("Guadalajara Branches");
});

router.get('/getExtensionsMichoacan', async(req, res)=>{
  res.send("Michoacan Branches");
});

router.get('/getExtensionsPuebla', async(req, res)=>{
  res.send("Puebla Branches ")
});

router.get('/getExtensionsBranches', async(req,res)=>{
  res.send("Ciudad de Mexico Branches");
})

router.get('/getExtensionsOaxaca', async(req, res)=>{
  res.send("Oaxaca branches"); 
});

module.exports = router; 
const express = require('express');
const router = express.Router();

router.get('/getBranchesColima', async(req, res)=>{
  res.send("Colima Branches"); 
});

router.get('/getBranchesGuadalajara', async(req, res) =>{
  res.send("Guadalajara Branches");
});

router.get('/getBranchesMichoacan', async(req, res)=>{
  res.send("Michoacan Branches");
});

router.get('/getBranchesPuebla', async(req, res)=>{
  res.send("Puebla Branches ")
});

router.get('/getCiudadMexicoBranches', async(req,res)=>{
  res.send("Ciudad de Mexico Branches");
})

router.get('/getOaxaca', async(req, res)=>{
  res.send("Oaxaca branches"); 
});

module.exports = router; 
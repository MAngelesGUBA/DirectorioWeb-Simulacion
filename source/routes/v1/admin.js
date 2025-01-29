const express = require('express'); 
const router = express.Router();

router.get('/getUsers', async(req, res) =>{
  res.send("Listado de usuarios");
});

router.post('/interUsers', async(req,res) =>{

}); 

router.patch('/updateUsers', async(req, res) =>{

});

router.delete('/deleteUsers', async(req, res) =>{

}); 

module.exports = router; 
const express = require('express');
const router = express.Router();

//vista general
router.get('/home', async(req, res) =>{
  res.render('pages/index',{
    title:'Home'
  });
});

module.exports = router; 
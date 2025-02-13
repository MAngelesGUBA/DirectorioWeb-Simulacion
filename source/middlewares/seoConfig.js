const seoConfig = require('../config/v1/seo')

const setUpSeo = (req,res,next) =>{
  res.locals.seo = seoConfig;
  next();
};

module.exports = setUpSeo; 
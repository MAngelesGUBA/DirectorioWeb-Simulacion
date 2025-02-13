const { contentSecurityPolicy } = require("helmet");

const helmetConfig={
  xXssProtection: false, // Elimina X-XSS-Protection
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "https://cdn.jsdelivr.net"], // Reemplaza con el CDN que uses
      fontSrc: ["'self'", "https:", "data:"],  
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
};

module.exports = helmetConfig; 
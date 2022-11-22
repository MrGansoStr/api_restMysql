const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  
  let authorization = req.get("authorization").toString();
  let token = '';
  if(authorization && authorization.toLowerCase().startsWith("bearer")){
    token = authorization.substring(7);
  }
  let decodedToken =  ""
  try {
    decodedToken = jwt.verify(token, "theSecretKeyForTOKEN");
  } catch (error) {
    return res.status(400).send(error).json();
  }
  next();
} 

module.exports = validateToken;
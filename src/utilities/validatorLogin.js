const validatorLogin = (obj) => {
  if(obj.codeConexion.length < 8 || obj.codeConexion.length > 10) {
    return false;
  }
  if(obj.LnameP?.length === 0) {
    return false;
  }
  if(Object.keys(obj).length > 2) {
    return false;
  }
  else{
    return true;
  }
};

module.exports = validatorLogin;
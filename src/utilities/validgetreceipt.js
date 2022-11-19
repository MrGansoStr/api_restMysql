const validinput = (obj) => {
  if(obj.userid === 0) {
    return false;
  }
  if(obj.userid == String) {
    return false;
  }
  else{
    return true;
  }
}

module.exports = validinput;
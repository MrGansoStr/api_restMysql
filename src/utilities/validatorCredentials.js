const { body } = require('express-validator')

const validatorCodeConexion = () => {
  return [
    body('code_conexion').trim().not().isEmpty().isLength({ min: 8, max: 10 }).whitMessage('La longitud esta mal')];
}

module.exports = validatorCodeConexion;

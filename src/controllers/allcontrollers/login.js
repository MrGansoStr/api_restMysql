const jwt = require('jsonwebtoken');

const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries.js');
const validLogin = require('../../utilities/validatorLogin.js');

const Login = async (req, res) => {
  let credentials = { ...req.body };
  if (!validLogin(credentials)) {
    return res.status(403).send({ message: "Hay algun error en los parametros" });
  }
  try {
    const connection = await connectDB();
    const [result] = await connection.query(queries.LOGIN, [credentials.codeConexion, credentials.LnameP]);

    if (result.length === 0) {
      return res.status(401).json({ message: "Codigo de Conexion o Apellido Parteno Incorrecto" });
    }

    const token = await jwt.sign({ name: credentials.codeConexion }, "theSecretKeyForTOKEN", {
      expiresIn: "2h",
    });

    let FinalResponse = {
      message: "Inicio de sesion exitoso",
      accessToken: token,
      expiresIn: "2h",
      userInfo: result[0],
    };
    return res.status(200).send(FinalResponse);
  } catch (error) {
    return res.status(400).send(error).json();
  }
};

module.exports = Login;
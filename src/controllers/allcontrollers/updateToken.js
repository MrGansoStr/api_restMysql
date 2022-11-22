const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries.js');

const jwt = require('jsonwebtoken');

const updateToken = async (req, res) => {
  let credentials = {...req.body};
  try {
    const token = await jwt.sign({ codeConexion: credentials.codeConexion }, "theSecretKeyForTOKEN", {
      expiresIn:"2h"
    });
    const connection = await connectDB();
    const [ result ] = await connection.query(queries.UPDATETOKEN, [token, credentials.userid]);
    let FinalResult = {
      accesToken: token,
      expiresIn: "2h",
    }
    return res.status(200).send(FinalResult);
  } catch (error) {
    return res.status(400).send(error); 
  }
  return;
} 

module.exports = updateToken;
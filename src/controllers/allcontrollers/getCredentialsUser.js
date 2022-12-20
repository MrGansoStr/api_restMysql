const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries.js');

const getCredentialsUser = async(req, res) => {
  let credentials = {...req.body};
  try {
    const connection = await connectDB();
    let [ result ] = await connection.query(queries.GETCREDENTIALSUSER, [credentials.dni]);
    if(result.length === 0) {
      return res.status(400).send({message: "No se encontraron registros"});
    }
    return res.status(200).send({message: "Success Request", userInfo: result[0]});
  } catch (error) {
    return res.status(400).send(error).json();
  }
  return;
}

module.exports = getCredentialsUser;
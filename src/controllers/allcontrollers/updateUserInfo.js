const connectDB = require('../../services/connection.db');
const queries = require('./queries/queries');

const updateUserInfo = async (req, res) => {
  let credentials = {...req.body};
  try {
    const connection = await connectDB();
    const [ result ] = await connection.query(queries.UPDATEUSERINFO, [credentials.newemail, credentials.userid]);
    if(result.affectedRows == 1) {
      return res.status(200).send({message: "User updated successfully"});
    }
    else{
      return res.status(400).send({message: "Algo anda mal, intentelo de nuevo más tarde"});
    }
  } catch (error) {
    return res.status(400).send(error).json();
  }
  return;
}

module.exports = updateUserInfo;
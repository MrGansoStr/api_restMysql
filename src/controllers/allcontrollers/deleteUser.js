const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries');

const deleteUser = async (req, res) => {
  let credentials = {...req.body};
  try {
    const connection = await connectDB();
    const [ result ] = await connection.query(queries.DELETEUSER, [credentials.userid]);
    if(result.affectedRows != 0) {
      return res.status(200).send({message: "Deleted Successfully"});
    } 
    else {
      return res.status(400).send({message: "Algo anda mal inténtelo de nuevo más tarde"});
    }
  } catch (error) {
    return res.status(400).send(error);
  }
  return;
}

module.exports = deleteUser;
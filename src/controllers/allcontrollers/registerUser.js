const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries.js');

const registerUser = async(req, res) => {
  let credentials = {...req.body};
  try {
    const connection = await connectDB();
    let [ result ] = await connection.query(queries.REGISTERUSER, []);
    return res.status(200).send({message: "User Registered Successfully"});
  } catch (error) {
    return res.status(400).send(error);
  }
  return;
}

module.exports = registerUser;
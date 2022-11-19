const connectDB = require('../../services/connection.db.js');

const getUsers = async (req, res) => {
  try {
    const connection = await connectDB();
    const [ result ] = await connection.query(`SELECT * FROM users`);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({message: error.code})
    console.log(error.code);
  }
}

module.exports = getUsers;
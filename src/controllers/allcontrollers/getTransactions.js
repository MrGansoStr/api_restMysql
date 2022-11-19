const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries.js');

const getTransacions = async (req, res) => {
  let credentials = { ...req.body };
  try {
    const connection = await connectDB();
    const [result] = await connection.query(queries.GETTRANSACTIONS, [credentials.userid]);
    if (result.length === 0) {
      return res.status(403).send({ message: "No se encontraron registros" });
    }
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(error?.code).json();
  }
  return;
};

module.exports = getTransacions;
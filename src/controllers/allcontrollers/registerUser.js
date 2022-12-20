const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries.js');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const registerUser = async(req, res) => {
  let credentials = {...req.body};
  let code_conexion_receipt = '2651';
  let number_receipt = '2022-'
  code_conexion_receipt += getRandomInt(1000, 9999);
  number_receipt += getRandomInt(10000000, 99999999);
  try {
    const connection = await connectDB();
    let [ exist ] = await connection.query(`SELECT dni FROM users WHERE dni = ${credentials.dni}`);
    if(exist.length > 1) {
      return res.status(400).send({message: "This user Already Exists"});
    }
    let [ result ] = await connection.query(queries.REGISTERUSER, [credentials.userRol, credentials.fname, credentials.pname, credentials.mname, credentials.dni, credentials.email, credentials.phone, credentials.address]);
    let [ result1 ] = await connection.query(queries.HELPSEARCHUSERID, [credentials.dni]);
    let [ result2 ] = await connection.query(queries.REGISTERONERECEIPT, [result1[0]?.id_user, code_conexion_receipt, number_receipt, ]);
    return res.status(200).send({message: "User Registered Successfully"});
  } catch (error) {
    return res.status(400).send(error);
  }
  return;
}

module.exports = registerUser;
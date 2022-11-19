const LOGIN = 'SELECT a.user_rol, a.Fname, LOWER(a.LnameP) AS LnameP, a.LnameM, a.email, b.code_conexion, b.state FROM users a JOIN receipts b ON a.id_user = b.id_user_child WHERE b.code_conexion = ? AND a.LnameP = ?';

const GETRECEIPT = 'SELECT a.code_conexion, a.month_factured, a.number_receipt, a.mount, a.state, a.issue, a.expires, b.dni, b.type FROM receipts a JOIN users b ON a.id_user_child = b.id_user WHERE id_user_child = ?';

module.exports = {
  LOGIN,
  GETRECEIPT
};
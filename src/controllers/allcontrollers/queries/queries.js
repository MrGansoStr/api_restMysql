const LOGIN = 'SELECT a.id_user, a.user_rol, a.Fname, LOWER(a.LnameP) AS LnameP, a.LnameM, a.email, b.code_conexion, b.state FROM users a JOIN receipts b ON a.id_user = b.id_user_child WHERE b.code_conexion = ? AND a.LnameP = ?';

const GETRECEIPT = 'SELECT a.id_receipt, a.code_conexion, a.month_factured, a.number_receipt, a.mount, a.state, a.issue, a.expires, b.dni, b.type FROM receipts a JOIN users b ON a.id_user_child = b.id_user WHERE a.id_user_child = ? AND a.id_receipt = ? ';

const GETRECEIPTS = 'SELECT a.id_receipt, a.code_conexion, MONTH(a.month_factured) AS monthFactured, YEAR(a.month_factured) AS yearFactured, a.number_receipt, a.mount, a.state, YEAR(a.issue) AS issueYear, MONTH(a.issue) AS issueMonth, DAY(a.issue) AS issueDay, YEAR(a.expires) AS expiresYear, MONTH(a.expires) AS expiresMonth, DAY(a.expires) AS expiresDay, b.Fname, b.LnameP FROM receipts a, users b, service c, supply_details d WHERE b.id_user = a.id_user_child AND c.id_service = b.id_service_child AND a.id_user_child = ?';

const GETRECEIPTEXPIRED = 'SELECT a.id_receipt, a.code_conexion, MONTH(a.month_factured) AS monthFactured, YEAR(a.month_factured) AS yearFactured, a.number_receipt, a.mount, a.state, YEAR(a.issue) AS issueYear, MONTH(a.issue) AS issueMonth, DAY(a.issue) AS issueDay, YEAR(a.expires) AS expiresYear, MONTH(a.expires) AS expiresMonth, DAY(a.expires) AS expiresDay, b.Fname, b.LnameP FROM receipts a, users b, service c, supply_details d WHERE b.id_user = a.id_user_child AND c.id_service = b.id_service_child AND a.id_user_child = ? AND a.state = ?';

const BALANCE = 'SELECT a.id_user, a.dni, b.val FROM users a JOIN balance b ON a.id_user = b.id_user_child WHERE a.id_user = ?';

const GETTRANSACTIONS = 'SELECT a.id_user, a.dni, b.id_transaction, b.id_receipt_child, b.id_transaction_encoded, b.time, b.status, b.payedWith FROM users a JOIN transactions b ON a.id_user = b.id_user_child WHERE b.id_user_child = ?';

const UPDATETOKEN = 'UPDATE users SET token = ? WHERE id_user = ? ';

const GENERATETRANSACTION = 'INSERT INTO transactions (id_transaction, id_receipt_child, id_user_child, id_transaction_encoded, time, status, payedWith) VALUES (default, ?, ?, ?, ?, 1, ?)';

const GETRECEIPTSPENDING = 'SELECT a.id_receipt, a.code_conexion, MONTH(a.month_factured) AS monthFactured, YEAR(a.month_factured) AS yearFactured, a.number_receipt, a.mount, a.state, YEAR(a.issue) AS issueYear, MONTH(a.issue) AS issueMonth, DAY(a.issue) AS issueDay, YEAR(a.expires) AS expiresYear, MONTH(a.expires) AS expiresMonth, DAY(a.expires) AS expiresDay, b.Fname, b.LnameP FROM receipts a, users b, service c, supply_details d WHERE b.id_user = a.id_user_child AND c.id_service = b.id_service_child AND a.id_user_child = ? AND a.state = 3 ';

const UPDATEUSERINFO = 'UPDATE users SET email = ? WHERE id_user = ?';

const DELETEUSER = 'DELETE FROM users WHERE id_user = ?';
///////////////
//For register user
const REGISTERUSER = 'INSERT INTO users (id_user, user_rol, Fname, LnameP, LnameM, dni, username, password, email, phone, address, type, token, id_service_child) VALUES (default, ?, ?, ?, ?, ?, "user", "pass", ?, ?, ?, "persontestdefault", "tokendefault", 5)';

const HELPSEARCHUSERID = 'SELECT id_user, Fname, LnameP, dni FROM users WHERE dni = ?';

const REGISTERONERECEIPT = 'INSERT INTO receipts (id_receipt, id_user_child, code_conexion, month_factured, number_receipt, mount, state, issue, expires) VALUES (default, ?, ?, "2022-12-20", ?, 1.0, 1, "2023-01-01", "2023-01-01")';
//For register user
///////////////////
const GETCREDENTIALSUSER = 'SELECT a.LnameP, b.code_conexion FROM users a JOIN receipts b ON a.id_user = b.id_user_child WHERE a.dni = ?';

module.exports = {
  LOGIN,
  GETRECEIPT,
  GETRECEIPTS,
  GETRECEIPTEXPIRED,
  BALANCE,
  GETTRANSACTIONS,
  UPDATETOKEN,
  GENERATETRANSACTION,
  GETRECEIPTSPENDING,
  UPDATEUSERINFO,
  DELETEUSER,
  REGISTERUSER,
  HELPSEARCHUSERID,
  REGISTERONERECEIPT,
  GETCREDENTIALSUSER
};
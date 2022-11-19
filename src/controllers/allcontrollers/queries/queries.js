const LOGIN = 'SELECT a.id_user, a.user_rol, a.Fname, LOWER(a.LnameP) AS LnameP, a.LnameM, a.email, b.code_conexion, b.state FROM users a JOIN receipts b ON a.id_user = b.id_user_child WHERE b.code_conexion = ? AND a.LnameP = ?';

const GETRECEIPT = 'SELECT a.code_conexion, a.month_factured, a.number_receipt, a.mount, a.state, a.issue, a.expires, b.dni, b.type FROM receipts a JOIN users b ON a.id_user_child = b.id_user WHERE id_user_child = ?';

const GETRECEIPTS = 'SELECT a.id_receipt, a.code_conexion, MONTH(a.month_factured) AS monthFactured, YEAR(a.month_factured) AS yearFactured, a.number_receipt, a.mount, a.state, YEAR(a.issue) AS issueYear, MONTH(a.issue) AS issueMonth, DAY(a.issue) AS issueDay, YEAR(a.expires) AS expiresYear, MONTH(a.expires) AS expiresMonth, DAY(a.expires) AS expiresDay, b.Fname, b.LnameP FROM receipts a, users b, service c, supply_details d WHERE b.id_user = a.id_user_child AND c.id_service = b.id_service_child AND a.id_user_child = ?';

const GETRECEIPTEXPIRED = 'SELECT a.id_receipt, a.code_conexion, MONTH(a.month_factured) AS monthFactured, YEAR(a.month_factured) AS yearFactured, a.number_receipt, a.mount, a.state, YEAR(a.issue) AS issueYear, MONTH(a.issue) AS issueMonth, DAY(a.issue) AS issueDay, YEAR(a.expires) AS expiresYear, MONTH(a.expires) AS expiresMonth, DAY(a.expires) AS expiresDay, b.Fname, b.LnameP FROM receipts a, users b, service c, supply_details d WHERE b.id_user = a.id_user_child AND c.id_service = b.id_service_child AND a.id_user_child = ? AND a.state = ?';

const BALANCE = 'SELECT a.id_user, a.dni, b.val FROM users a JOIN balance b ON a.id_user = b.id_user_child WHERE a.id_user = ?';

module.exports = {
  LOGIN,
  GETRECEIPT,
  GETRECEIPTS,
  GETRECEIPTEXPIRED,
  BALANCE,
};
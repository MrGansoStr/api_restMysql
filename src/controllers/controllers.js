const default_page = require('./allcontrollers/default.page.js');
const notfound_page = require('./allcontrollers/notfound.page.js');
const getUsers = require('./allcontrollers/getusers.js');
const login = require('./allcontrollers/login.js');
const getReceipt = require('./allcontrollers/getReceipt.js');
const getReceipts = require('./allcontrollers/getReceipts.js');
const getReceiptsExpired = require('./allcontrollers/getReceiptsExpired.js');
const getBalance = require('./allcontrollers/getBalance.js');
const getTransacions = require('./allcontrollers/getTransactions.js');
const updateToken = require('./allcontrollers/updateToken.js');
const genTransaction = require('./allcontrollers/genTransaction.js');
const getReceiptsPending = require('./allcontrollers/getReceiptsPending');
const updateUserInfo = require('./allcontrollers/updateUserInfo.js');

module.exports = {
  default_page,
  notfound_page,
  getUsers,
  login,
  getReceipt,
  getReceipts,
  getReceiptsExpired,
  getBalance,
  getTransacions,
  updateToken,
  genTransaction,
  getReceiptsPending,
  updateUserInfo
};
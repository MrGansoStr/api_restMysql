const default_page = require('./allcontrollers/default.page.js');
const notfound_page = require('./allcontrollers/notfound.page.js');
const getUsers = require('./allcontrollers/getusers.js');
const login = require('./allcontrollers/login.js');
const getReceipt = require('./allcontrollers/getReceipt.js');
const getReceipts = require('./allcontrollers/getReceipts.js');

module.exports = {
  default_page,
  notfound_page,
  getUsers,
  login,
  getReceipt,
  getReceipts
};
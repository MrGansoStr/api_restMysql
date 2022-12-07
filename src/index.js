// Modulos
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Controladores
const controller = require('./controllers/controllers.js');

// Validators
const validator = require('./utilities/validatorCredentials.js');
const validateToken = require('./controllers/controllerHeader/validateToken.js');

// Options
const corsOptions = {
  origin: true,
  credentials: true
};

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Routes 
app.get('/', controller.default_page);
app.get('/users', controller.getUsers);
app.post('/login', controller.login);
app.post('/receipt', validateToken, controller.getReceipt);
app.post('/receipts', validateToken, controller.getReceipts);
app.post('/expireds', validateToken, controller.getReceiptsExpired);
app.post('/balance', validateToken, controller.getBalance);
app.post('/transactions', validateToken, controller.getTransacions);
app.post('/updatetoken', validateToken, controller.updateToken);
app.post('/generatetransaction', controller.genTransaction);
app.post('/pendings', controller.getReceiptsPending);
// Si no encuentra alguna de las rutas
app.use(controller.notfound_page);

const port = process.env.PORT || 4000;
app.listen(port)
console.log(`Listening on PORT: ${port}`);
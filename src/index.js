// Modulos
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Controladores
const controller = require('./controllers/controllers.js');

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

// Si no encuentra alguna de las rutas
app.use(controller.notfound_page);
const port = process.env.PORT || 4000;
app.listen(port)
console.log(`Listening on PORT: ${port}`);
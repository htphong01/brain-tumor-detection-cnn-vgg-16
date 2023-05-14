require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

const httpServer = createServer(app);

if (process.env.NODE_ENV != 'test') {
  app.use(morgan('tiny'));
}

app.use(cors({ original: "*" }));
app.use(express.json({limit: '50mb'}));

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = httpServer;

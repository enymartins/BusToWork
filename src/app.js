const express = require ('express');
const cors = require('cors');
const app = express();

const db = require('../src/data/database');
db.connect();

app.use(cors())
app.use(express.json());

const index = require('./routes/index')
const busCompany = require('./routes/busCompanyRoutes');
const neighborhood = require('./routes/neighborhoodsRoutes');

app.use('/', index);
app.use('/buses', busCompany);
app.use('/neighborhoods', neighborhood);

module.exports = app;
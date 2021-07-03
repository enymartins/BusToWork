const express = require ('express');
const app = express();

const db = require('../src/data/database');
db.connect();
app.use(express.json());

const busCompany = require('./routes/busCompanyRoutes');
// const neighborhood = require('./routes/neighborhoodsRoutes');

app.use('/buses', busCompany);
// app.use('/neighborhoods', neighborhood);

module.exports = app;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/busCompanyController');

router.post('/create', controller.createBusLines);

module.exports = router;
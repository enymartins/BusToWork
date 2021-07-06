const express = require('express');
const router = express.Router();
const controller = require('../controllers/busCompanyController');

router.post('/create', controller.createBusLine);
router.get('/list', controller.getAll);
router.post('/:id', controller.updateBusLine);

module.exports = router;
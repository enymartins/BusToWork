const express = require('express');
const router = express.Router();
const controller = require('../controllers/busCompanyController');

router.post('/create', controller.createBusLine);
router.get('/list', controller.getAll);
router.put('/:id', controller.updateBusLine);
router.delete('/:id', controller.removeBusLine);

module.exports = router;
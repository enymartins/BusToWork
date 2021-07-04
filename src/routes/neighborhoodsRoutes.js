const express = require('express');
const router = express.Router();
const controller = require('../controllers/neighborhoodsController');

router.post('/create', controller.createNeighborhood);
router.get('/list', controller.getAll);

module.exports = router;
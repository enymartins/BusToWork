const express = require('express');
const router = express.Router();
const controller = require('../controllers/neighborhoodsController');

router.post('/create', controller.createNeighborhood);
router.get('/list', controller.getAll);
router.post('/:id', controller.updateNeighborhood);
router.delete('/:id', controller.removeNeighborhood);

module.exports = router;
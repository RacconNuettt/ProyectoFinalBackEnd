const express = require('express');
const router = express.Router();
const { createStock, getStock, updateStock, deleteStock } = require('../controllers/stockController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', createStock);
router.get('/', getStock);
router.put('/:id', updateStock);
router.delete('/:id', deleteStock);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createSale, getAllSales, getSaleById, updateSale, deleteSale } = require('../controllers/saleController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', createSale); 
router.get('/', getAllSales);
router.get('/:id', getSaleById);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale); 

module.exports = router;

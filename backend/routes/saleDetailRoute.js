const express = require('express');
const { createSaleDetail, getAllSaleDetails,  getSaleDetailById, updateSaleDetail, deleteSaleDetail } = require('../controllers/saleDetailController');

const router = express.Router();

router.post('/', createSaleDetail);
router.get('/', getAllSaleDetails);
router.get('/:id', getSaleDetailById);
router.put('/:id', updateSaleDetail);
router.delete('/:id', deleteSaleDetail);

module.exports = router;

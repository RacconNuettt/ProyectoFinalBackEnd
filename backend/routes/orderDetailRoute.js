const express = require('express');
const router = express.Router();
const { createOrderDetail, getAllOrderDetails, getOrderDetailById, updateOrderDetail, deleteOrderDetail } = require('../controllers/orderDetailController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware(['client']), createOrderDetail);
router.get('/', getAllOrderDetails);
router.get('/:id', getOrderDetailById);
router.put('/:id', updateOrderDetail);
router.delete('/:id', deleteOrderDetail);

module.exports = router;

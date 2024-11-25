const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders, getOrderById, updateOrderStatus, deleteOrder }= require('../controllers/orderController'); 
const authMiddleware = require('../middlewares/authMiddleware'); 

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrderStatus);
router.delete('/:id', deleteOrder);

module.exports = router;

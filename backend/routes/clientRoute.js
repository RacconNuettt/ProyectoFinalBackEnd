const express = require('express');
const { registerClient, loginClient,getClient, updateClient, deleteClient } = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerClient);
router.post('/login', loginClient); 

router.get('/:id', authMiddleware, getClient); 
router.put('/:id', authMiddleware, updateClient); 
router.delete('/:id', authMiddleware, deleteClient); 

module.exports = router;

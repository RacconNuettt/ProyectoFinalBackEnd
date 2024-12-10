const express = require('express');
const { registerClient, loginClient, getClient, getAllClients, updateClient, deleteClient } = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/register', registerClient);
router.post('/login', loginClient);

router.get('/', getAllClients);
router.get('/:id', authMiddleware(['client']), getClient); 
router.put('/:id', authMiddleware(['client']), updateClient); 
router.delete('/:id', authMiddleware(['client']), deleteClient); 

module.exports = router;

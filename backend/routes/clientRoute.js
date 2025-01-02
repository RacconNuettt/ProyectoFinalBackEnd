const express = require('express');
const { registerClient, loginClient, getClient, getAllClients, updateClient, deleteClient } = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/register', registerClient);
router.post('/login', loginClient);

router.get('/', getAllClients);
router.get('/:id', authMiddleware(['client', 'admin']), getClient); 
router.put('/:id', authMiddleware(['client', 'admin']), updateClient); 
router.delete('/:id', authMiddleware(['client', 'admin']), deleteClient);


module.exports = router;

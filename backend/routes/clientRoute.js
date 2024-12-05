const express = require('express');
const { registerClient, loginClient, getClient, updateClient, deleteClient } = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/register', registerClient);
router.post('/login', loginClient);

router.get('/client/:id', authMiddleware(['client']), getClient); 
router.put('/client/:id', authMiddleware(['client']), updateClient); 
router.delete('/client/:id', authMiddleware(['client']), deleteClient); 

module.exports = router;

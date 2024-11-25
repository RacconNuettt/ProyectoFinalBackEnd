const express = require('express');
const { createProvider, getAllProviders, getProviderById, updateProvider, deleteProvider } = require('../controllers/providerController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createProvider);      
router.get('/', getAllProviders);                      
router.get('/:id', getProviderById);                 
router.put('/:id', updateProvider);   
router.delete('/:id', deleteProvider); 

module.exports = router;

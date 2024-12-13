const express = require('express');
const router = express.Router();
const { createTypeDish, getAllTypeDishes, getTypeDishById, updateTypeDish, deleteTypeDish} = require('../controllers/typeDishController')
const authMiddleware = require('../middlewares/authMiddleware'); 

router.post('/', createTypeDish);
router.get('/', getAllTypeDishes);
router.get('/:id', getTypeDishById);
router.put('/:id', updateTypeDish);
router.delete('/:id', deleteTypeDish);

module.exports = router;

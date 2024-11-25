const express = require('express');
const { createDish, getDishes, getDishById, updateDish, deleteDish } = require('../controllers/dishController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createDish);
router.get('/', getDishes);
router.get('/:id', getDishById);
router.put('/:id', updateDish);
router.delete('/:id', deleteDish);

module.exports = router;
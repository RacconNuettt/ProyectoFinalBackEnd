const express = require('express');
const { createDishCategory, getAllDishCategories, getDishCategoryById, updateDishCategory, deleteDishCategory } = require('../controllers/dishCategoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createDishCategory);
router.get('/', getAllDishCategories);
router.get('/:id', getDishCategoryById);
router.put('/:id', updateDishCategory);
router.delete('/:id', deleteDishCategory);

module.exports = router;

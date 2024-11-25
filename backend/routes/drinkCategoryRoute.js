const express = require('express');
const { createDrinkCategory, getAllDrinksCategory, getDrinkCategoryById, updateDrinkCategory, deleteDrinkCategory } = require('../controllers/drinkCategoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createDrinkCategory);
router.get('/', getAllDrinksCategory);
router.get('/:id', getDrinkCategoryById);
router.put('/:id', updateDrinkCategory);
router.delete('/:id', deleteDrinkCategory);

module.exports = router;

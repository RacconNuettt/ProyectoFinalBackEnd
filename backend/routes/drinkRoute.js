const express = require('express');
const { createDrink, getAllDrink, getDrinkById, updateDrink, deleteDrink } = require('../controllers/drinkController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createDrink);
router.get('/', getAllDrink);
router.get('/:id', getDrinkById);
router.put('/:id', updateDrink);
router.delete('/:id', deleteDrink);

module.exports = router;

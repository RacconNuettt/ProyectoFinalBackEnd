const express = require('express');
const router = express.Router();
const { createMenu, getMenus, updateMenu, deleteMenu } = require('../controllers/menuController');

router.post('/', createMenu);
router.get('/', getMenus);
router.put('/:id', updateMenu);
router.delete('/:id', deleteMenu);

module.exports = router;

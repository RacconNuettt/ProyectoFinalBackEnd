const express = require('express');
const { registerAdmin, loginAdmin, getAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const { get } = require('mongoose');

const router = express.Router();

router.post('/adminRegister', registerAdmin);
router.post('/adminLogin', loginAdmin);

router.get('/:id', getAdmin);
router.put('/:id',  updateAdmin);
router.delete('/:id', authMiddleware, deleteAdmin);

module.exports = router;
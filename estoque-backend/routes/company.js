const express = require('express');
const router = express.Router();
const { createCompany, updateCompany, deleteCompany } = require('../controllers/companyController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/', authenticateToken, createCompany);

router.put('/:id', authenticateToken, updateCompany);

router.delete('/:id', authenticateToken, deleteCompany);

module.exports = router;
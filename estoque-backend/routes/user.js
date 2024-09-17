const express = require('express');
const router = express.Router();
const { updateUser, deleteUser, getUserCompanies } = require('../controllers/userController').default;
const authenticateToken = require('../middlewares/authMiddleware');

router.put('/', authenticateToken, updateUser);

router.delete('/', authenticateToken, deleteUser);

router.get('/companies', authenticateToken, getUserCompanies);

module.exports = router;

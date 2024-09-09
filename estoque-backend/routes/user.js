const express = require('express');
const router = express.Router();
const { updateUser, deleteUser, getUserCompanies } = require('../controllers/userController');

router.put('/user', updateUser);

router.delete('/user', deleteUser);

router.get('/user/companies', getUserCompanies);

module.exports = router;

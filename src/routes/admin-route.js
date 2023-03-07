const express = require('express');

const adminController = require('../controllers/admin-controller');
const authenticateAdmin = require('../middlewares/authenticate-admin');

const router = express.Router();

router.get('/getAllUser', authenticateAdmin, adminController.getAllUser);

module.exports = router;
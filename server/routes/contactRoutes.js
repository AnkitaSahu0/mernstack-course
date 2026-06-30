const express = require('express');
const router = express.Router();
const { submitForm, getLeads } = require('../controllers/contactController');
const protect = require('../middleware/auth');

router.post('/submit', submitForm);
router.get('/leads', protect, getLeads);

module.exports = router;
const express = require('express');
const { detectFraud } = require('../controllers/fraudController');

const router = express.Router();

router.get('/detect', detectFraud);

module.exports = router;

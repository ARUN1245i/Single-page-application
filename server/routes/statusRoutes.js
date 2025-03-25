const express = require('express');
const { getStatus } = require('../controllers/statusController');

const router = express.Router();

router.get('/:applicationId', getStatus);

module.exports = router;

const express = require('express');

const { AirportController } = require('../../controllers/index')

const router = express.Router();

router.get('/', AirportController.getAirports)

module.exports = router;
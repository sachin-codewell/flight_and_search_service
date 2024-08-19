const express = require('express');

const { FlightController } = require('../../controllers/index')

const router = express.Router();

router.post('/', FlightController.createFlight)

module.exports = router;
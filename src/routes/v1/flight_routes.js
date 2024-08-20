const express = require('express');

const { FlightController } = require('../../controllers/index')
const { FlightMiddleware } = require('../../middlewares/index')

const router = express.Router();

router.post('/', FlightMiddleware.validateCreateFlight, FlightController.createFlight)
router.get('/', FlightController.getFlights);

module.exports = router;
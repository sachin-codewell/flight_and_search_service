const express = require('express');

const { FlightController } = require('../../controllers/index')
const { FlightMiddleware } = require('../../middlewares/index')

const router = express.Router();

router.post('/', FlightMiddleware.validateCreateFlight, FlightController.createFlight)
router.get('/', FlightController.getFlights);
router.get('/:id', FlightController.getFlight);
router.patch('/:id/seats', FlightController.updateSeatsInSpecificFlight);

module.exports = router;
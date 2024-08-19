const express = require('express');

const airplaneRoutes  = require('./airplane_routes')
const cityRoutes = require('./city_routes');
const airportRoutes = require('./airport_routes');
const flightRoutes = require('./flight_routes')

const router = new express.Router();
router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);
router.use('/flights', flightRoutes)

module.exports = router;
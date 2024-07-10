const express = require('express');

const airplaneRoutes  = require('./airplane_routes')
const cityRoutes = require('./city_routes');

const router = new express.Router();
router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);

module.exports = router;
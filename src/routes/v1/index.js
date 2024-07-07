const express = require('express');

const airplaneRoutes  = require('./airplane_routes')

const router = new express.Router();
router.use('/airplanes', airplaneRoutes);

module.exports = router;
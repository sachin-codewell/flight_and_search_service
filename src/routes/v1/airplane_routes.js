const express = require('express');

const { AirplaneController } = require('../../controllers/index');

const router = express.Router();

router.post('/createplane', AirplaneController.createAirplane);

module.exports = router;

const express = require('express');

const { AirplaneController } = require('../../controllers/index');

const router = express.Router();

router.post('/create', AirplaneController.createAirplane);
router.delete('/delete/:id', AirplaneController.deleteAirplane);
router.get('/', AirplaneController.getAirplanes);

module.exports = router;

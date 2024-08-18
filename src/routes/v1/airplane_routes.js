const express = require('express');

const { AirplaneController } = require('../../controllers/index');

const router = express.Router();

router.post('/create', AirplaneController.createAirplane);
router.delete('/delete/:id', AirplaneController.deleteAirplane);
router.get('', AirplaneController.getAirplanes);
router.get('/:id', AirplaneController.getAirplaneByID);
router.put('/', AirplaneController.updateAirplane);
module.exports = router;

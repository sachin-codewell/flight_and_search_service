const { CityController } = require('../../controllers/index');

const express = require('express');

const router = express.Router();
router.post('/create', CityController.createCity);
router.delete('/:id', CityController.deleteCity);
router.get('/', CityController.getCities);
router.get('/:id', CityController.getCityByID);
router.put('/', CityController.updateCity);
module.exports = router;
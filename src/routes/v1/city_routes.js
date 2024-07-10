const { CityController } = require('../../controllers/index');

const express = require('express');

const router = express.Router();
router.post('/create', CityController.createCity);
router.delete('/:id', CityController.deleteCity);
module.exports = router;
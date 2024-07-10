const { CityController } = require('../../controllers/index');

const express = require('express');

const router = express.Router();
router.post('/create', CityController.createCity);
module.exports = router;
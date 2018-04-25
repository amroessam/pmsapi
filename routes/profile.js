const express = require('express');
const profile = express.Router();
const profileController = require('../controllers/profileController')

profile.get('/', profileController.index)
profile.post('/create', profileController.create)
module.exports = profile
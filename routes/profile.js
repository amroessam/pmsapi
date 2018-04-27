const express = require('express');
const profile = express.Router();
const profileController = require('../controllers/profileController')

profile.get('/', profileController.index)
profile.get('/init', profileController.initStatus)
profile.post('/init', profileController.init)
profile.post('/create', profileController.create)
profile.patch('/update', profileController.update)
module.exports = profile
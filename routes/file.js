const express = require('express');
const file = express.Router();
const fileController = require('../controllers/fileController')
file.get('/', fileController.index)

module.exports = file
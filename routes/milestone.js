const express = require('express');
const milestone = express.Router();
const milestoneController = require('../controllers/milestoneController')

milestone.get('/', milestoneController.index)

module.exports = milestone
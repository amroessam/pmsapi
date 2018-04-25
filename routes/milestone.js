const express = require('express');
const milestone = express.Router();
const milestoneController = require('../controllers/milestoneController')

milestone.get('/', milestoneController.index)
milestone.post('/add',milestoneController.add)
milestone.get('/getAll',milestoneController.get)
milestone.get('/getOne/:id',milestoneController.getOne)
milestone.delete('/delete/:id',milestoneController.delete)
milestone.patch('/update',milestoneController.update)
module.exports = milestone
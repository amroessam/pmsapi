//server configurations
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const router = express.Router()
const config = require('./config/config')
const mongoose = require('mongoose')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
require('./config/db')
require('./models/file')
require('./models/milestone')
require('./models/profile')
//server routes
const r_file = require('./routes/file')
const r_milestone = require('./routes/milestone')
const r_profile = require('./routes/profile')
router.use('/file', r_file)
router.use('/milestone', r_milestone)
router.use('/profile', r_profile)
app.use('/api/v1', router)
//server spin up
app.set('port',config.API_PORT)
app.listen(app.get('port'))
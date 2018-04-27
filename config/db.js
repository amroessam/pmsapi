const mongoose = require('mongoose')
const config = require('./config') 
mongoose.connect(process.env.DB_URI)

require('./config/db')
const express = require('express')
const app = express()
const router = express.Router()
const config = require('./config/config')

const r_file = require('./routes/file')
const r_milestone = require('./routes/milestone')

router.use('/file', r_file)
router.use('/milestone', r_milestone)

app.use('/api/v1', router)
app.set('port',config.API_PORT)
app.listen(app.get('port'))
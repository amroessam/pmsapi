const fs = require('fs')
module.exports = {
    startup() {
        const fs = require('fs')
        if (!fs.existsSync(__dirname + '/../.env')) {
            fs.writeFileSync(__dirname + '/../.env', `DB_URI=mongodb://localhost/pms
API_PORT=8000
API_INITIALIZED=false`)
        }
        require('dotenv').config({override: false})
    }
} 
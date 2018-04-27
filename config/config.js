const fs = require('fs')
module.exports = {
    startup() {
        if (!fs.existsSync(__dirname + '/../.env')) {
            fs.writeFileSync(__dirname + '/../.env', `DB_URI=mongodb://localhost/pms
API_PORT=8000
API_INITIALIZED=false`)
        }
        require('dotenv').config({override: false})
    },
    update(){
        fs.writeFileSync(__dirname + '/../.env',`DB_URI=mongodb://localhost/pms
API_PORT=8000
API_INITIALIZED=true`)
    }
} 
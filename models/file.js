const mongoose = require('mongoose')
const fileSchema = mongoose.Schema({
    fileName:{type:String},
    filePath:{type:String},
    fileExtension:{type:String},
    fileDescription:{type:String}
},{timestamps:true})

const file = mongoose.model('file', fileSchema)
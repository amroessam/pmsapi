const mongoose = require('mongoose')
const profileSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    bio:{type:String,required:false},
    github:{type:String,required:false},
    linkedin:{type:String,required:false},
    milestones:[{type:mongoose.Schema.Types.ObjectId, ref: 'Milestones',default:[]}],
    skills:[{type:Object}]
},{timestamps:true})


profileSchema.statics.updateProfile = (id,update,cb)=>{
    Profile.findByIdAndUpdate(id,update,{new:true},cb)
}

profileSchema.statics.createProfile = (newProfile,cb)=>{
    Profile.count((err,c)=>{
        if(c<1){
            newProfile.save(cb)
        }else{
            err = {error:true, message:'Profile already exists'} 
            cb(err)
        }
    })
}

const Profile = mongoose.model('Profile', profileSchema)
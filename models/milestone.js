const mongoose = require('mongoose')
const milestoneSchema = mongoose.Schema({
    milestoneTitle:{type:String,required:true},
    milestoneDescription:{type:String,required:true},
    milestoneLink:{type:String,required:[true,'Milestone Link is required']}
},{timestamps:true})

milestoneSchema.statics.createMilestone = (newMilestone,cb)=>{
        newMilestone.save(cb)
}
milestoneSchema.statics.getMilestones = (cb)=>{
    Milestone.find(cb)
}
milestoneSchema.statics.deleteMilestone = (id,cb)=>{
    Milestone.findByIdAndRemove(id, cb)
}
milestoneSchema.statics.getOneMilestone = (id,cb)=>{
    Milestone.findById(id, cb)
}
milestoneSchema.statics.updateMilestone = (id,update,cb)=>{
    Milestone.findByIdAndUpdate(id,update,cb)
}
const Milestone = mongoose.model('Milestone', milestoneSchema)
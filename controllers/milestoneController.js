const mongoose = require('mongoose')
const Milestone = mongoose.model('Milestone')

module.exports = {
    index(req,res){
        res.send('MILESTONE ROUTE')
    },
    add(req,res){
        const {milestoneTitle,milestoneDescription,milestoneLink} = req.body
        const milestone = new Milestone({
            milestoneTitle:milestoneTitle,
            milestoneDescription:milestoneDescription,
            milestoneLink:milestoneLink
        })
        Milestone.createMilestone(milestone,(err,milestone)=>{
            if(err){
                res.json({error:true,message:err._message})
            }else{
                res.json({
                    milestone:milestone
                })
            }
        })
    },
    get(req,res){
        // Milestone.updateMilestone(req.params.id,'','')
        Milestone.getMilestones((err,milestones)=>{
            if(err){
                res.json({error:true,message:err._message})
            }else{
                res.send(milestones)
            }
        })
    },
    delete(req,res){
        Milestone.deleteMilestone(req.params.id,(err,milestone)=>{
            if(err){
                res.json({error:true,message:err._message})
            }else{
                res.send(milestone)
            }
        })
    },
    getOne(req,res){
        Milestone.getOneMilestone(req.params.id,(err,milestone)=>{
            if(err){
                res.json({error:true,message:err._message})
            }else{
                res.send(milestone)
            }
        })
    },
    update(req,res){
        let update = {}
        update[req.body.field] = req.body.fieldValue
        Milestone.updateMilestone(req.body.id,update,(err,milestone)=>{
            if(err){
                res.json({error:true,message:err._message})
            }else{
                res.send(milestone)
            }
        })
    }
}
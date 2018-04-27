const mongoose = require('mongoose')
const Profile = mongoose.model('Profile')
const config = require('../config/config')
const fs = require('fs')
const path = require('path')
module.exports = {
    index(req,res){
        res.send('PROFILE ROUTE')
    },
    initStatus(req,res){
        res.send(process.env.API_INITIALIZED)
    },
    init(req,res){
        process.env.API_INITIALIZED = true
        config.update()
        res.send(process.env.API_INITIALIZED)
    },
    update(req,res){
        let update = {}
        update[req.body.field] = req.body.fieldValue
        Profile.updateProfile(req.body.id,update,(err,profile)=>{
            if(err){
                res.json({error:true,message:err._message})
            }else{
                res.send(profile)
            }
        })
    },
    create(req,res){
        const {firstName,lastName,email} = req.body
        const profile = new Profile({
            firstName:firstName,
            lastName:lastName,
            email:email
        })
        Profile.createProfile(profile,(err,profile)=>{
            if(err){
                res.json({error:true, message:err.message})
            }else{
                res.json({profile:profile})
            }
        })
    }
}

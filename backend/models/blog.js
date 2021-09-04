import mongoose from 'mongoose'

const blogSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    }
      ,
    body:{
        type:String,
        required:true
    },

    created_At:{
        type:Date,
        required:true,
        default:Date.now
    }, 
    author:String,
    likes:Number,
    tags:[String]

}) 

export default mongoose.model('blog',blogSchema)
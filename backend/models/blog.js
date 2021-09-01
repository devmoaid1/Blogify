const mongoose=require("mongoose") 


const blogSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    }
      ,
    content:{
        type:String,
        required:true
    },

    publishDate:{
        type:Date,
        required:true,
        default:Date.now
    }

}) 

module.exports=mongoose.model('blog',blogSchema)
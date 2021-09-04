import mongoose from "mongoose" 


const commentSchema=new mongoose.Schema({

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
    blog:{
        type:mongoose.Types.ObjectId,
        ref:'blog',
        required:true
    }

}) 

export default mongoose.model('comment',commentSchema)
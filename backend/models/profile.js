import mongoose from "mongoose" 


const profileSchema=new mongoose.Schema({

    bio:String, 
    avatar:String,
    email:String,
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'users',
        required:true,
        unique:true
    },
    followed:{
        type:Boolean,
        default:false
    },
    followers:[{type:mongoose.Types.ObjectId,
    ref:'users',
                
     }]
    
    
}) 

export default mongoose.model('profile',profileSchema)
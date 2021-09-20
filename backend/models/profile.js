import mongoose from "mongoose" 


const profileSchema=new mongoose.Schema({

    bio:String, 
    
    username:String,
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
    followers:[{type:String,
         
                
     }]
    
    
}) 

export default mongoose.model('profile',profileSchema)
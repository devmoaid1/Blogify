import mongoose from 'mongoose' 


const userSchema=mongoose.Schema({
    
    avatar:String,
    username:{ 
        type:String,
        required:true,
        unique:true
    },

    email:{ 
        type:String,
        required:true,
        unique:true
    },

    password:{ 
        type:String,
        required:true,
        
    }

}) 

export default  mongoose.model('users',userSchema)
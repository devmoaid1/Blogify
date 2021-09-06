import  mongoose  from "mongoose"; 


 const databaseConnection=()=>{
    mongoose.connect(process.env.Mongo_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      }).then(()=>console.log("connected")).catch((err)=>console.error(err))
    
    const db =mongoose.connection 
    db.on('error',(error)=>console.error(error) )
    db.once('open',()=>console.log("connected to database..."))


 } 


 export default databaseConnection
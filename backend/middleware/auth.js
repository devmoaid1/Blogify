import jwt from 'jsonwebtoken' 



export const isAuthenticated=async(req,res,next)=>{
   
   if(!req.headers['authorization']){
       return next(res.status(401).json())
   }

  const authHeader=req.headers['authorization']
  const bearerToken=authHeader.split(' ') 
  const token=bearerToken[1]
   
  
   

  jwt.verify(token,process.env.TOKEN_SECRET,(err,payload)=>{ 

      if(err){
          return next(res.status(401).json({error:err}))
      }
      else{
          req.user=payload 
          next()

      }

  }) 

 





}

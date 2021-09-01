const express=require('express') 
const routes=express()
const Blog=require('../models/blog') 



//get all blogs 

routes.get('/',async(req,res)=>{

  try{
       const blogs= await Blog.find() 
       res.json(blogs)
  }catch(err){ 

    res.status(500).json({massage:err.massage})

  } 

}) 

// add a new blog 

routes.post('/',async(req,res)=>{
   const blog= new Blog({
       title:req.body.title,
       content:req.body.content,
       
   })

   try{ 

    const newBlogs= await blog.save() 
    res.status(201).json(newBlogs)
       

   }catch(err){
    res.status(400).json({massage:err.massage})
   }


})



module.exports=routes
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
       body:req.body.body,
       created_At:req.body.created_At,
       author:req.body.author,
       likes:req.body.likes,
       tags:req.body.tags
       
   })

   try{ 

    const newBlogs= await blog.save() 
    res.status(201).json(newBlogs)
       

   }catch(err){
    res.status(400).json({massage:err.massage})
   }


})

// delete single Blog 

routes.delete('/:blogTitle',async(req,res)=>{

  const title=req.params.blogTitle
    try{ 

       const deletedBlog=await Blog.deleteOne({title:title}) 
       res.json(deletedBlog)

    }catch(err){
       res.status(400).json({massage:err})
    }


})


module.exports=routes
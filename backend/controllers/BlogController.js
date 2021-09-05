import express from 'express'
import  Blog from'../models/blog' 

const router=express.Router()


//get all blogs 

router.get('/',async(req,res)=>{

  try{
       const blogs= await Blog.find() 
       res.json(blogs)
  }catch(err){ 

    res.status(500).json({massage:err.massage})

  } 

}) 

// add a new blog 

router.post('/',async(req,res)=>{
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

router.delete('/:blogTitle',async(req,res)=>{

  const title=req.params.blogTitle
    try{ 

       const deletedBlog=await Blog.deleteOne({title:title}) 
       res.json(deletedBlog)

    }catch(err){
       res.status(400).json({massage:err})
    }


})


export default router
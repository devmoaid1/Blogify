const express=require('express') 
const routes=express()
const Comment=require('../models/comment') 



//get all comments for a specific blog   

routes.get('/:blogTitle',async(req,res)=>{


     const blog=req.params.blogTitle
  try{
       const comments= await Comment.find({blog:blog})
       res.json(comments)
  }catch(err){ 

    res.status(500).json({massage:err.massage})

  } 

}) 

// add a new comment

routes.post('/',async(req,res)=>{
   const comment= new Comment({
       
       body:req.body.body,
       
       author:req.body.author,
       blog:req.body.blog
       
       
   })

   try{ 

    const newComment= await comment.save() 
    res.status(201).json(newComment)
       

   }catch(err){
    res.status(400).json({massage:err.massage})
   }


})

// delete single Blog 

routes.delete('/:commentId',async(req,res)=>{

  const comment=req.params.commentId
    try{ 

       const deletedComment=await Comment.deleteOne({_id:comment}) 
       res.json(deletedComment)

    }catch(err){
       res.status(400).json({massage:err})
    }


})


module.exports=routes
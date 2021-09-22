
import  Blog from'../models/blog' 
import User from '../models/user'



//get all blogs 

const getAllBlogs=async(req,res)=>{
  
 
  try{ 
       
    const blogs= await Blog.find()
    
    const authors_Ids=blogs.map((blog)=>{
      return blog.author
    }).slice(4,8) 


    const authors=await User.find({_id:authors_Ids}) 
    res.json({blogs:blogs,authors:authors})
  }catch(err){ 

    res.status(500).json({massage:err.massage})

  } 

}

// add a new blog 

export const createBlog=async(req,res)=>{
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


}

// delete single Blog 

export const deleteBlog=async(req,res)=>{

  const title=req.params.blogTitle
    try{ 

       const deletedBlog=await Blog.deleteOne({title:title}) 
       res.json(deletedBlog)

    }catch(err){
       res.status(400).json({massage:err})
    }


} 


// get blog by tag 

export const getBlogsBytag= async(req,res)=>{

      const tag=req.params.tagName 

      try{
           
          const blogs=await Blog.find({tags:tag}) 

          if(blogs.length===0){
            res.json({massage:`there are no blogs with ${tag} tag`})
          }else{

            res.json(blogs)
          }





      }catch(err){

        res.status(400).json({massage:err.massage})
      }






}


export default getAllBlogs
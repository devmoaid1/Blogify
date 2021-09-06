import express from 'express' 
import getAllBlogs,{deleteBlog,createBlog} from '../controllers/BlogController'
const route=express() 


//get all blogs route 

route.get('/',getAllBlogs) 

// add a new blog route  

route.post('/',createBlog) 

// delete single Blog 

route.delete('/:blogTitle',deleteBlog) 


export default route
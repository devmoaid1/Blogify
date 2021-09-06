import express from 'express' 
import getAllBlogs,{deleteBlog,createBlog, getBlogsBytag} from '../controllers/BlogController'
const route=express() 


//get all blogs route 

route.get('/',getAllBlogs) 

// get blogs by tag 

route.get('/:tagName',getBlogsBytag)

// add a new blog route  

route.post('/',createBlog) 

// delete single Blog 

route.delete('/:blogTitle',deleteBlog) 


export default route
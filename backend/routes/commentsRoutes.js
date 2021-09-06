import express from 'express' 
import getBlogComments,{addComment,deleteComment} from '../controllers/commentController'


const route=express() 


// get blog all comments

route.get('/:blogID',getBlogComments) 

//add a comment

route.post('/',addComment)

// delete a comment
route.delete('/:commentId',deleteComment)

export default route
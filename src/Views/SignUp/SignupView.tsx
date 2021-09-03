import {FC,useState} from 'react'
import { Text,FormControl,
    FormLabel, Box ,Input, Button} from "@chakra-ui/react" 
    import { Link } from 'react-router-dom'
import axios from 'axios'
const SignupView:FC=()=> { 

    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [username,setUsername]=useState<string>('')


    const handleRegister=()=>{
       
       const registerData= new FormData()

       registerData.append('username',username)
       registerData.append('password',password)
       registerData.append('email',email) 
        
      const data={
        username:username,
        password:password,
        email:email
      } 
       axios.post('http://localhost:8000/Auth/register',data).then(res=>console.log("success")).catch(err=>console.log(err))
       console.log(registerData.get('username'))

    }
    return (
        <>
          <Box d="flex" flexDirection="row" alignItems="center" alignContent="center"  bg="#082032" width="100%" height="100vh">
               <Box d="flex" p={4} mx="auto" flexDirection="column" bg="white" width="400px" height="530" boxShadow="md" borderRadius="3px">
                    
                    <Text fontSize="40px" fontWeight="bold"fontFamily="saira" color="primary.100">Blogify</Text>
                    <Text fontSize="25px" color="black" fontWeight="semibold" m={4}>SignUp</Text> 

                    <FormControl id="email" mt={2}>
                   <FormLabel fontSize="15px">Email address</FormLabel>
                   <Input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"  />
                     </FormControl> 

                     <FormControl id="username" mt={2}>
                   <FormLabel fontSize="15px">Username</FormLabel>
                   <Input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} placeholder="username"  />
                     </FormControl>
                     
                     <FormControl id="password" mt={2}>
                   <FormLabel fontSize="15px">Password</FormLabel>
                   <Input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                     </FormControl> 
                     
                             
                        <Button width="100%" bgColor="primary.100" onClick={handleRegister} color="white"mt={4} p={3} fontWeight="bold"  >
                           Sign Up
                        </Button> 

                        <Link to="/Login/"><Button width="100%" bgColor="primary.100" color="white" mt={4} p={3} fontWeight="bold"  >
                          Login Page
                        </Button>
                        </Link>
               </Box>
            </Box>  
        </>
    )
}

export default SignupView

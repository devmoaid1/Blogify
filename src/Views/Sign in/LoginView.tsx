import React,{FC,useState} from 'react'
import { Text,FormControl,
    FormLabel, Box ,Input, Button} from "@chakra-ui/react"

import axios from 'axios'
const LoginView:FC=()=> { 


    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    
    const handleSubmit=()=>{
      
         const loginData ={
             email:email,
             password:password
         }
         axios.post('http://localhost:8000/Auth/login',loginData).then(res=>console.log(res.data)).catch(err=>console.log(err))
         console.log(email,password)

    }
    return (
        <>
            <Box d="flex" flexDirection="row" alignItems="center" alignContent="center"   bg="#082032" width="100%" height="100vh">
               <Box d="flex" p={4} mx="auto" flexDirection="column" bg="white" width="400px" height="500" boxShadow="md" borderRadius="3px">
                    
                    <Text fontSize="40px" fontFamily="saira" fontWeight="bold"  color="primary.100">Blogify</Text>
                    <Text fontSize="25px" color="black" fontWeight="semibold" m={4}>Login</Text> 

                    <FormControl id="email" mt={3}>
                   <FormLabel fontSize="15px">Email address</FormLabel>
                   <Input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"  />
                     </FormControl>
                     
                     <FormControl id="password" mt={3}>
                   <FormLabel fontSize="15px">Password</FormLabel>
                   <Input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                     </FormControl>
                     
                        <Text  as="a" fontSize="15px" fontWeight="semibold" color="primary.100" cursor="pointer" mx={2} textAlign="right">Forget Password ?</Text>
                        <Text   fontSize="15px" fontWeight="semibold" color="black" mt={3}  textAlign="left">Dont have an account yet? <Text as="a" href="/signup/" cursor="pointer" color="primary.100" >Signup</Text></Text>
                      
                        
                        <Button width="100%" onClick={handleSubmit} color="white" bgColor="primary.100" mt={4} fontWeight="bold"  >
                           Login
                        </Button>
                        



               </Box>

            </Box>
            
        </>
    )
}

export default LoginView

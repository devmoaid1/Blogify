import React,{FC} from 'react'
import { Text,FormControl,
    FormLabel, Box ,Input, Button} from "@chakra-ui/react"

import { Link } from 'react-router-dom'
const LoginView:FC=()=> { 

    return (
        <>
            <Box d="flex" flexDirection="row" alignItems="center" alignContent="center"  bg="gray.100" width="100%" height="100vh">
               <Box d="flex" p={4} mx="auto" flexDirection="column" bg="white" width="400px" height="500" boxShadow="md" borderRadius="3px">
                    
                    <Text fontSize="40px" fontWeight="bold" fontStyle="italic" color="teal">Blogify</Text>
                    <Text fontSize="25px" color="black" fontWeight="semibold" m={4}>Login</Text> 

                    <FormControl id="email" mt={3}>
                   <FormLabel fontSize="15px">Email address</FormLabel>
                   <Input type="email" name="email" placeholder="Email Address"  />
                     </FormControl>
                     
                     <FormControl id="password" mt={3}>
                   <FormLabel fontSize="15px">Password</FormLabel>
                   <Input type="password" name="password" placeholder="password"/>
                     </FormControl>
                     
                        <Text  as="a" fontSize="15px" fontWeight="semibold" color="teal" cursor="pointer" mx={2} textAlign="right">Forget Password ?</Text>
                        <Text   fontSize="15px" fontWeight="semibold" color="black" mt={3}  textAlign="left">Dont have an account yet? <Text as="a" href="/signup/" cursor="pointer" color="teal" >Signup</Text></Text>
                      
                        
                        <Button width="100%"colorScheme="teal"mt={4} fontWeight="bold"  >
                           Login
                        </Button>
                        



               </Box>

            </Box>
            
        </>
    )
}

export default LoginView

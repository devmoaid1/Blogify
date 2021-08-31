import {FC} from 'react'
import { Text,FormControl,
    FormLabel, Box ,Input, Button} from "@chakra-ui/react" 
    import { Link } from 'react-router-dom'

const SignupView:FC=()=> {
    return (
        <>
          <Box d="flex" flexDirection="row" alignItems="center" alignContent="center"  bg="gray.100" width="100%" height="100vh">
               <Box d="flex" p={4} mx="auto" flexDirection="column" bg="white" width="400px" height="530" boxShadow="md" borderRadius="3px">
                    
                    <Text fontSize="40px" fontWeight="bold" fontStyle="italic" color="primary.100">Blogify</Text>
                    <Text fontSize="25px" color="black" fontWeight="semibold" m={4}>SignUp</Text> 

                    <FormControl id="email" mt={2}>
                   <FormLabel fontSize="15px">Email address</FormLabel>
                   <Input type="email" name="email" placeholder="Email Address"  />
                     </FormControl> 

                     <FormControl id="username" mt={2}>
                   <FormLabel fontSize="15px">Username</FormLabel>
                   <Input type="text" name="username" placeholder="username"  />
                     </FormControl>
                     
                     <FormControl id="password" mt={2}>
                   <FormLabel fontSize="15px">Password</FormLabel>
                   <Input type="password" name="password" placeholder="password"/>
                     </FormControl> 
                     
                             
                        <Button width="100%" bgColor="primary.100" color="white"mt={4} p={3} fontWeight="bold"  >
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

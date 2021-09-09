import React,{FC,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Text,FormControl,
    FormLabel, Box ,Input, Button} from "@chakra-ui/react"
import { RootState } from '../../App'
import { LoginState } from '../../state/reducers/userReducer'
import { login } from '../../state/actions/users'

const LoginView:FC=()=> { 


    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('') 

    const dispatch=useDispatch()

    const {error,isLogged}=useSelector<RootState,LoginState>((state)=>state.login)
    
    const handleSubmit=()=>{
      
         const loginData ={
             email:email,
             password:password
         }
         console.log(isLogged)
         dispatch(login(loginData))

    } 

   

    if(isLogged===true){
          
         return <Redirect to="/home/"/>

    }


    return (
        <>
            <Box d="flex" flexDirection="row" alignItems="center" alignContent="center"   bg="black" width="100%" height="100vh">
               <Box d="flex" p={4} mx="auto" flexDirection="column" bg="white" width="400px" height="500" boxShadow="md" borderRadius="3px">
                    
                    <Text fontSize="40px" fontFamily="saira" fontWeight="bold"  color="primary.100">Blogify</Text>
                    <Text fontSize="25px" color="black" fontWeight="semibold" m={4}>Login</Text> 
                    
                    <Text fontSize="20px" fontWeight="bold"fontFamily="saira" color="red">{error}</Text>

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
                      
                        
                        <Button width="100%" onClick={handleSubmit}  color="white" bgColor="primary.100" mt={4} fontWeight="bold"  >
                           Login
                        </Button>
                        



               </Box>

            </Box>
            
        </>
    )
}

export default LoginView

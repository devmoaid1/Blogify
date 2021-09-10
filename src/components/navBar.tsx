import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import {FC} from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../state/actions/users'

const NavBar:FC=()=>{
   

    const dispatch=useDispatch()
   
   const handleLogout=()=>{

      dispatch(logout)

   }
   
   
    return (
        <>
          <Flex p="4" h="100px">
  <Box ml="14">
    <Heading size="xl" fontFamily="saira" fontStyle="italic" color="primary.100">Blogify</Heading>
  </Box>
  <Spacer/>
  <Box mr="13">
    <Box as="a" href="/Signup/" fontSize="25px" fontFamily="heading" fontWeight="bold" cursor="pointer" color="primary.100" >
      Home
    </Box>

    <Box as="a" href="/Login/" fontSize="25px" fontFamily="heading" fontWeight="bold" cursor="pointer" color="primary.100" m="3">Settings</Box>
    <Box as="button" onClick={handleLogout} fontSize="25px" fontFamily="heading" fontWeight="bold" cursor="pointer" color="primary.100" >
      Logout
    </Box>
  </Box>
</Flex>    
        </>
    )
}

export default NavBar

import React,{FC} from 'react'
import background from "../../assets/images/background2.png"
import { Text,
     Box  ,Flex,Heading,Spacer,Image} from "@chakra-ui/react" 
const HomeView:FC=()=> {
    return (
        <Box as="div" height="100vh" bg="#082032" position="relative">
              
              <Flex p="4" postion="absloute" top='0'>
  <Box ml="14">
    <Heading size="xl" fontFamily="saira" fontStyle="italic" color="primary.100">Blogify</Heading>
  </Box>
  <Spacer/>
  <Box mr="13">
    <Box as="a" href="/Signup/" fontSize="20px" fontFamily="heading" cursor="pointer" color="primary.100" >
      Sign Up
    </Box>
    <Box as="a" href="/Login/" fontSize="20px" fontFamily="heading" cursor="pointer" color="primary.100" m="3">Log in</Box>
  </Box>
</Flex> 

         <Box height="250px" position="absolute" left="800px" right="100px" top="200px">
                     <Image src={background} alt="background" />
             </Box>

             <Text color="primary.100" position="absolute" fontSize="90px" fontFamily="saira" fontWeight="bold" left="80px" top="270px" >
                Blogify...
             </Text> 
             <Box as="div" maxWidth="360px" position="absolute" left="80px" top="390px">
             <Text color="primary.100" textAlign="left" lineHeight="10" fontSize="30px" fontFamily="saira" fontWeight="semibold" left="100px" top="270px" >
                The best platform to share blogs and articles with large community 
             </Text> 
             </Box>

        </Box>
    )
}

export default HomeView

import React,{FC} from 'react'
import background from "../../assets/images/background2.png"
import { Text,
     Box  ,Flex,Heading,Spacer,Image} from "@chakra-ui/react" 
const HomeView:FC=()=> {
    return (
        <Box as="div" height="100vh" bg="gray.100" position="relative">
              
              <Flex p="4" postion="absloute" top='0'>
  <Box ml="4">
    <Heading size="xl" fontFamily="saira" color="primary.100">Blogify</Heading>
  </Box>
  <Spacer />
  <Box mr="10">
    <Box as="a" cursor="pointer" color="primary.100" mr="4">
      Sign Up
    </Box>
    <Box as="a" cursor="pointer" color="primary.100">Log in</Box>
  </Box>
</Flex> 

         <Box height="250px" position="absolute" left="800px" right="100px" top="200px">
                     <Image src={background} alt="background" />
             </Box>

             <Text color="primary.100" position="absolute" fontSize="90px" fontFamily="saira" fontWeight="bold" left="100px" top="270px" >
                Blogify...
             </Text> 
             <Box as="div" maxWidth="360px" position="absolute" left="100px" top="390px">
             <Text color="primary.100" textAlign="left" lineHeight="10" fontSize="30px" fontFamily="saira" fontWeight="semibold" left="100px" top="270px" >
                The best platform to share blogs and articles with large community 
             </Text> 
             </Box>

        </Box>
    )
}

export default HomeView

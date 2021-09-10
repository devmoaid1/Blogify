import { StarIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Center, Flex, Heading, Link, Wrap, WrapItem ,Text} from '@chakra-ui/react'
import {FC} from 'react'

const BlogContainer:FC=()=> {
    return (
        <>
            <Flex   direction="row" p="5" h="250px" w="100%"> 
                
                <Flex direction="column">
                <Avatar src="https://bit.ly/broken-link" size="2xl" /> 
                <Box maxWidth="150px" mt="2">

                 <Text textOverflow="ellipsis" fontFamily="saira" fontWeight="semibold" fontSize="20px" isTruncated>moaid123</Text>
                </Box>
                </Flex>

                <Box visibility="hidden" w="20px"  >
                    <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" bgColor="primary.100">0</Button>

                     </Box>

                <Flex direction="column" ml="4"  w={{
      base: "25%", // 0-48em
      md: "50%", // 48em-80em,
      xl: "100%", // 80em+
    }}    height={{
      base: "600px", // 0-48em
      md: "400px", // 48em-80em,
      xl: "100%", // 80em+
    }} >
                 <Heading  textAlign="left" size="2xl" fontWeight="bold">My first Blog </Heading>
                  <Text  textAlign="left" h="15px" mt="2" color="gray.400">2021-09-08 8:49PM</Text>
               <Box width="50%" mt="4"> 
                 <Text textOverflow="ellipsis" textAlign="left" fontFamily="heading"  maxHeight="70px" noOfLines={3}>

                   Hello this is my firts blog here i would like to introduce my silf lorem plasa cdsdcdcsdcsdcsdcsdcdscsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasdsssssssssssssssssssssssssssssssssssssssssss
                 </Text>

                 </Box> 

                 
                <Box textAlign="left" mt="2">
                 <Link color="primary.100"> 
                   Read more..
                 </Link> 



                 <Wrap mt="2">
<WrapItem>
<Center p="3" h="20px" borderRadius="14px" bg="primary.100">
#Technology
</Center>
</WrapItem>
<WrapItem>
<Center p="3" h="20px" borderRadius="14px" bg="primary.100">
#Sport 
</Center>
</WrapItem>
<WrapItem>
<Center p="3" h="20px" borderRadius="14px" bg="primary.100">
#Fashion
</Center>
</WrapItem>

</Wrap>

                </Box>
                </Flex> 
                     
                <Box  position="relative" right={{
      base: "100px", // 0-48em
      md: "220px", // 48em-80em,
      xl: "230px", // 80em+
    }}>
                    <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" fontFamily="saira" bgColor="primary.100">0</Button>

                     </Box>

          </Flex>


        </>
    )
}

export default BlogContainer

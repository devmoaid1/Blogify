import React,{FC} from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Text,
     Box  ,Flex,Heading,Spacer,Avatar,Wrap,WrapItem,Center, VStack,StackDivider,Link, Button } from "@chakra-ui/react" 


const HomeView:FC=()=> {
    return (
         <Box display="flex"  bg="black" flexDirection="column"  height="100%"  >


{/* NavBar */}
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
  </Box>
</Flex>  


            

            <Box display="flex" p="6">
                
                <Box  color="white"  backgroundColor="#171717" width="60%" borderRadius="4px">
                
                       <VStack 
                         divider={<StackDivider borderColor="gray.600" />}
                       >

        {/* blog Container */}
                       
      <Flex   direction="row" p="5" h="250px" w="100%"> 
                       
                       <Flex direction="column">
                       <Avatar src="https://bit.ly/broken-link" size="2xl" /> 
                       <Box maxWidth="150px" mt="2">

                        <Text textOverflow="ellipsis" fontFamily="saira" fontWeight="semibold" fontSize="20px" isTruncated>moaid123</Text>
                       </Box>
                       </Flex>

                       <Box visibility="hidden" w="20px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" bgColor="primary.100">0</Button>

                            </Box>

                       <Flex direction="column" ml="4"   >
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
                            
                       <Box  position="relative" right="400px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" fontFamily="saira" bgColor="primary.100">0</Button>

                            </Box>

                 </Flex>






                 <Flex   direction="row" p="5" h="250px" w="100%"> 
                       
                       <Flex direction="column">
                       <Avatar src="https://bit.ly/broken-link" size="2xl" /> 
                       <Box maxWidth="150px" mt="2">

                        <Text textOverflow="ellipsis" fontFamily="saira" fontWeight="semibold" fontSize="20px" isTruncated>moaid123</Text>
                       </Box>
                       </Flex>

                       <Box visibility="hidden" w="20px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" bgColor="primary.100">0</Button>

                            </Box>

                       <Flex direction="column" ml="4"   >
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
                            
                       <Box  position="relative" right="400px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" fontFamily="saira" bgColor="primary.100">0</Button>

                            </Box>

                 </Flex>





                 <Flex   direction="row" p="5" h="250px" w="100%"> 
                       
                       <Flex direction="column">
                       <Avatar src="https://bit.ly/broken-link" size="2xl" /> 
                       <Box maxWidth="150px" mt="2">

                        <Text textOverflow="ellipsis" fontFamily="saira" fontWeight="semibold" fontSize="20px" isTruncated>moaid123</Text>
                       </Box>
                       </Flex>

                       <Box visibility="hidden" w="20px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" bgColor="primary.100">0</Button>

                            </Box>

                       <Flex direction="column" ml="4"   >
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
                            
                       <Box  position="relative" right="400px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" fontFamily="saira" bgColor="primary.100">0</Button>

                            </Box>

                 </Flex>



                 <Flex   direction="row" p="5" h="250px" w="100%"> 
                       
                       <Flex direction="column">
                       <Avatar src="https://bit.ly/broken-link" size="2xl" /> 
                       <Box maxWidth="150px" mt="2">

                        <Text textOverflow="ellipsis" fontFamily="saira" fontWeight="semibold" fontSize="20px" isTruncated>moaid123</Text>
                       </Box>
                       </Flex>

                       <Box visibility="hidden" w="20px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" bgColor="primary.100">0</Button>

                            </Box>

                       <Flex direction="column" ml="4"   >
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
                            
                       <Box  position="relative" right="400px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" fontFamily="saira" bgColor="primary.100">0</Button>

                            </Box>

                 </Flex>




                 <Flex   direction="row" p="5" h="250px" w="100%"> 
                       
                       <Flex direction="column">
                       <Avatar src="https://bit.ly/broken-link" size="2xl" /> 
                       <Box maxWidth="150px" mt="2">

                        <Text textOverflow="ellipsis" fontFamily="saira" fontWeight="semibold" fontSize="20px" isTruncated>moaid123</Text>
                       </Box>
                       </Flex>

                       <Box visibility="hidden" w="20px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" bgColor="primary.100">0</Button>

                            </Box>

                       <Flex direction="column" ml="4"   >
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
                            
                       <Box  position="relative" right="400px" >
                           <Button leftIcon={<StarIcon/>} color="white" fontWeight="bold" fontFamily="saira" bgColor="primary.100">0</Button>

                            </Box>

                 </Flex>



                        

                       </VStack>
        
                </Box>
                  

                  <Box  backgroundColor="#171717"  borderRadius="4px" color="white" ml="10" minHeight="300px" maxHeight="300px" w="350px" p="4">
                  
                  <Wrap>
  <WrapItem>
    <Center p="3" h="40px" borderRadius="14px" bg="primary.100">
      #Technology
    </Center>
  </WrapItem>
  <WrapItem>
    <Center p="3" h="40px" borderRadius="14px" bg="primary.100">
      #Sport 
    </Center>
  </WrapItem>
  <WrapItem>
    <Center p="3" h="40px" borderRadius="14px" bg="primary.100">
      #Fashion
    </Center>
  </WrapItem>

  <WrapItem>
    <Center p="3" h="40px" borderRadius="14px" bg="primary.100">
      #Cooking
    </Center>
  </WrapItem>

  <WrapItem>
    <Center p="3" h="40px" borderRadius="14px" bg="primary.100">
      #Films
    </Center>
  </WrapItem>

  <WrapItem>
    <Center p="3" h="40px" borderRadius="14px" bg="primary.100">
      #Triller
    </Center>
  </WrapItem>

  <WrapItem>
    <Center p="3" h="40px" borderRadius="14px" bg="primary.100">
      #Yess
    </Center>
  </WrapItem>

</Wrap>
      
                  </Box>

            </Box>


           
            

             

           
            <Box backgroundColor="#1E1C1C" h="100px" mt="3" color="white" fontFamily="body" fontWeight="semibold" fontSize="25px" p="5" > 
            
                CopyRights Reserved 2021
            </Box>

       </Box>
    )
}

export default HomeView

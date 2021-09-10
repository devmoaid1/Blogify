import { Box, Center, Wrap, WrapItem ,Text } from '@chakra-ui/react'
import React from 'react'

const PopularTags:React.FC =()=> {
    return (
        <>

<Box  backgroundColor="#171717"  borderRadius="4px" color="white" ml="10" minHeight="300px" h={[600,500,300]} w="350px" mt="14" p="4">
                  <Text textAlign="left" fontSize="20px" color="gray.400" mb="3">#Popular Tags</Text>
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

            
            
        </>
    )
}

export default PopularTags 

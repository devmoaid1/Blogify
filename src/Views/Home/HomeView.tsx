import {FC} from 'react'

import { 
     Box ,  VStack,StackDivider,Tab,TabList,TabPanels,TabPanel, Tabs } from "@chakra-ui/react" 
import NavBar from '../../components/navBar'
import { useSelector } from 'react-redux'
import { RootState } from '../../App'
import { LoginState } from '../../state/reducers/userReducer'
import { Redirect } from 'react-router'
import BlogContainer from './blogContainer'
import PopularTags from './popularTags'


const HomeView:FC=()=> { 


     const {isLogged}=useSelector<RootState,LoginState>((state)=>state.login)

     if(!isLogged){
       return <Redirect to="/"/>
     } 


    return (
         <Box display="flex"  bg="black" flexDirection="column"  height="100%"  >


{/* NavBar */}
                <NavBar/>


            

            <Box display="flex"  p="10">
                 <Box w="100px"></Box>

                <Tabs width="50%" colorScheme="green"> 
                   <TabList>
                        <Tab>Global Feed</Tab>

                   </TabList> 

                   <TabPanels>
                     <TabPanel>

                     <Box  color="white"  backgroundColor="#171717" width="100%"  borderRadius="4px" shadow="md">
                
                <VStack 
                  divider={<StackDivider borderColor="gray.600" />}
                >

                
                  <BlogContainer/> 
                  <BlogContainer/>
                  <BlogContainer/>
                  <BlogContainer/>
                  <BlogContainer/>
                 
                </VStack>
 
         </Box>
           
                     </TabPanel>
                   </TabPanels>

               </Tabs>    


               {/* popular Tags */}



            <PopularTags/>


      </Box>

           
            <Box backgroundColor="#1E1C1C" h="100px" mt="3" color="white" fontFamily="body" fontWeight="semibold" fontSize="25px" p="5" > 
            
                CopyRights Reserved 2021
            </Box>

       </Box>
    )
}

export default HomeView

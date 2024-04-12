import { VStack, Image, Text} from '@chakra-ui/react'
import React from 'react'


export default function Landing() {
  
  return (
    
    
    <VStack spacing={3} minHeight={'100vh'} minWidth={"99vw"} backgroundColor={'blue.800'} paddingTop={"25vh"}>
        <Image src=' https://i.pravatar.cc/150?img=7' alt="Circular Image"
        rounded="full" 
        borderWidth="2px" 
        borderColor="black" 
        boxSize="200px" 
        p={3.5}
        >
        </Image>
        <Text  textAlign="center"
      fontWeight="bold"
      fontSize={{ base: "2xl", md: "3xl" }}
      textColor="white"
      textShadow="3px 3px 5px rgba(0, 0, 0, 0.5)" >Hello, I am Karim</Text>
        <Text textAlign="center"
      fontWeight="bold"
      fontSize={{ base: "3xl", md: "4xl" }}
      textColor="white"
      textShadow="3px 3px 5px rgba(0, 0, 0, 0.5)" >A frontend developer specialised in React</Text>
    </VStack>
    
    
  )
}

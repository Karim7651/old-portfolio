import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Spacer, VStack,Box,Divider } from '@chakra-ui/react';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <Box>
      <VStack gap={0} backgroundColor={'black'} >
        <Header></Header>
        <Spacer></Spacer>
        <Landing></Landing>
        <Divider height={'1vh'} backgroundColor='#171923'  ></Divider>
        <Projects></Projects>
        <Divider height={'1vh'} backgroundColor='#171923'  ></Divider>
        <Contact></Contact>
      </VStack>
    
    </Box>
    
  );
}

export default App;

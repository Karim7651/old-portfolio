import {useState,useEffect} from 'react'
import React from 'react'
import {Divider, Flex,IconButton, Link, Spacer,Text } from '@chakra-ui/react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import { EmailIcon } from '@chakra-ui/icons'



export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down, hide the component
      } else {
        setIsVisible(true); // Scrolling up, show the component
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 1.05,
      behavior:'smooth',
    });
  };
  const scrollDownFurther = () => {
    window.scrollTo({
      top: window.innerHeight*2.4,
      behavior:'smooth',
    });
  };

  const componentStyles = {
    position: 'sticky',
    top: '0',
    backgroundColor: 'black',
    zIndex:'999',
    padding: '0px',
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.5s ease',
  };

  return (
      <Flex w="100%" p="2" style={componentStyles} minHeight={'5vh'} >
      <nav>
        <a href="" target="_blank">
          <IconButton  isRound="true" ml={4} mr={2} icon={<FaGithub/>} ></IconButton>
        </a>
        <a href="" target='_blank'>
          <IconButton  isRound="true" ml={2} mr={2} icon={<FaLinkedin/>} ></IconButton>
        </a>
        <a href=""  >
          <IconButton  isRound="true" ml={2} mr={2}  icon={<EmailIcon/>} ></IconButton>
        </a>
        </nav>
        <Spacer></Spacer> 
        <Link mr='5' mt='1.5' onClick={scrollDown}>Projects</Link>
        <Divider height={'4.5vh'} width={'0.1vw'} ml={5} mr={6} orientation='vertical' backgroundColor={'white'}></Divider>
        <Link mr='5' mt='1.5' onClick={scrollDownFurther}>Contact me</Link>
        
        
      </Flex>
  )
}

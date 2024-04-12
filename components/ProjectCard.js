import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Button,
  Spacer
  
} from '@chakra-ui/react'
import {FaArrowRight} from 'react-icons/fa'
import {ProjectCardc} from './ProjectCardc.css'

export default function ProjectCard(props) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image className="img" src={props.headerImgUrl} fill alt="project thumbnail"/>
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={900}
            fontSize={'sm'}
            letterSpacing={1.1}>
            
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
          {props.projectTitle}
          </Heading>
          <Spacer />
          <Text color={'	#fffff2'}>
            {props.description}
          </Text>
          <Spacer />
          <Center>
            <Button as='a' href={props.link} target="_blank"
            endicon={<FaArrowRight />}
          >See more</Button>
          </Center>
        </Stack>
      </Box>
    </Center>
  )
}
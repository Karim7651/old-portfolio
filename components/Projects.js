import { Grid, GridItem,VStack,Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
const projectsArray = [
  {
    headerImgUrl: "https://www.prodraw.net/fb_cover/images/fb_cover_65.jpg",
    projectTitle: "Project 1",
    description:"Description 1",
    link: "footer_image_url_1",
  },
  {
    headerImgUrl: "https://www.prodraw.net/fb_cover/images/fb_cover_65.jpg",
    projectTitle: "Project 2",
    description:"Description 2",
    link: "footer_image_url_2",
  },
  {
    headerImgUrl: "https://www.prodraw.net/fb_cover/images/fb_cover_65.jpg",
    projectTitle: "Project 3",
    description:"Description 3",
    link: "footer_image_url_3",
  },
  {
    headerImgUrl: "https://www.prodraw.net/fb_cover/images/fb_cover_65.jpg",
    projectTitle: "Project 3",
    description:"Description 4",
    link: "footer_image_url_3",
  }
  
];

export default function Projects() {
  return (
    <VStack gap={0} backgroundColor={'green.900'} minWidth={'99vw'} minHeight={'120vh'} >
      <Heading m='1vh'fontWeight={'bold'} fontSize={{base: '4xl',md: '5xl'}} textColor={'white'} mt='7vh' mb='2vh' >Feautured Projects</Heading>
    <Grid backgroundColor={'green.900'}  templateColumns={{base: '1fr',lg: 'repeat(2, 1fr)'}}columnGap={50} rowGap={2}  >
      {projectsArray.map((x) => (
        <GridItem><ProjectCard key={x.projectTitle} headerImgUrl={x.headerImgUrl}  projectTitle={x.projectTitle} description={x.description} link={x.link} ></ProjectCard></GridItem>
      ))}
    </Grid>
  </VStack>
  );
}
import React from 'react'
import TopCarousel from '../Components/Home/TopCarousel'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Flex2 from '../Components/Home/Flex2'
import Flex3 from '../Components/Home/Flex3'
import Grid1 from '../Components/Home/Grid1'
import Flex4 from '../Components/Home/Flex4'
import SecondCarousel from '../Components/Home/SecondCarousel'
import Flex5 from '../Components/Home/Flex5'
import Grid2 from '../Components/Home/Grid2'

const Landing = () => {
  return (
    <>
      <Box>
        <TopCarousel />
      </Box>
      <Box w={"100%"} mt={"1%"}>
        <Image src='https://images.bewakoof.com/uploads/grid/app/thin-strip-week-4-bday-launches-tom-desktop-1681908254.jpg' alt='error' w={"100%"} />
      </Box>
      <Box mt={"2%"}>
        <Image src='https://i.ibb.co/yNvwq8D/Screenshot-2023-04-20-142516.png' w={"100%"}/>
      </Box>
      <Box>
        <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"30px"}>Designs of the Week</Text>
        <Flex w={"100%"}>
          <Image src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1681905832.jpg' alt='error' w={"50%"} />
          <Image src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1681905833.jpg' alt='error' w={"50%"} />
        </Flex>
      </Box>
      <Box mt={"2%"} textAlign={"center"}>
        <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"30px"}>TRENDING CATEGORIES</Text>
        <Box w="100%">
          <Flex2 />
        </Box>
        <Box mt={"2%"}>
          <Flex3 />
        </Box>
      </Box>
      <Box mt={"2%"}>
        <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"30px"}>TOO HOT TO BE MISSED</Text>
        <Grid1 />
      </Box>
      <Box mt={"2%"} textAlign={"center"}>
        <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"30px"}>CATEGORIES TO BAG</Text>
        <Box w="100%">
          <Flex4 />
        </Box>
      </Box>
      <Box>
        <SecondCarousel />
      </Box>
      <Box mt={"2%"} textAlign={"center"}>
        <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"30px"}>TOP ACCESSORIES</Text>
        <Box w="100%">
          <Flex5 />
        </Box>
      </Box>
      <Box mt={"2%"}>
        <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"30px"}>OUR BEST PICKS</Text>
        <Grid2 />
      </Box>
      <Box mt={"2%"}>
        <Image src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg' alt='error' w={"100%"}/>
        <Image src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg' alt='error' w={"100%"} mt={"1%"} mb={"5px"}/>
      </Box>
    </>
  )
}

export default Landing
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Flex2 = () => {
    const data = [
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-PrintedTees-1681725002.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-OversizedTees-1681725001.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-Shorts-1681725002.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-Joggers-1681725001.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-Vests-1681725003.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-Fullsleeves-1681725000.jpg" },
    ]
    return (
        <Flex w={"100%"} gap={"10px"} m={"auto"}> 
            {
                data && data.map((el, i) => (
                    <Box key={i} w={"16%"}>
                        <Image src={el.src} alt='error' w={"100%"}/>
                    </Box>
                ))
            }
        </Flex>
    )
}

export default Flex2
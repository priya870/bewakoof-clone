import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Flex3 = () => {
    const data = [
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-PrintedTees-1681725005.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-OversizedTees-1681725005.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-Fashion-Tops-women-1681127928.png" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Joggers-1681725005.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg" },
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

export default Flex3
import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
const Flex4 = () => {
    const data = [
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-Boxers-1681725000.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-PJs-1681725002.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Coords-1681725004.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-w-pyjamas-2-1675144063.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-Shorts-Women-1678950685.png" },
    ]
    return (
        <Flex w={"100%"} gap={"10px"} m={"auto"}>
            {
                data && data.map((el, i) => (
                    <Box key={i} w={"16%"}>
                        <Image src={el.src} alt='error' w={"100%"} />
                    </Box>
                ))
            }
        </Flex>
    )
}

export default Flex4
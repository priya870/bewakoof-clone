import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Flex5 = () => {
    const data = [
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-Phone-gripper-1678944026.png" },
        { src: "https://images.bewakoof.com/uploads/grid/app/mugs-category-box-1678791481.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png" },
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

export default Flex5
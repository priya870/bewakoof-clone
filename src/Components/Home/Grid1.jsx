import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Grid1 = () => {
    const data = [
        { src: "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-b3at999-common-1681736257.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/COTM-Msite-720X420-week3--1--1681816550.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/COTM-Msite-720X420-week2--1--1681816551.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/COTM-Msite-720X420-week1--1--1681816551.jpg" }
    ]
    return (
        <SimpleGrid columns={2} spacing={5}>
        {data && data.map((el,i)=>(
        <Box key={i}>
            <Image src={el.src} w={"100%"}/>
        </Box>
        ))}
        </SimpleGrid>
    )
}

export default Grid1
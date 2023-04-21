import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Grid2 = () => {
    const data = [
        { src: "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-shorts-withbdayunit-1680267707.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-pants-Men-01-1681279001.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/plus-size-bday-1680263074.jpg" },
        { src: "https://images.bewakoof.com/uploads/grid/app/mid-banner-RIB2-0-1681908253.jpg" }
    ]
    return (
        <SimpleGrid columns={2} spacing={5}>
            {data && data.map((el, i) => (
                <Box key={i}>
                    <Image src={el.src} w={"100%"} />
                </Box>
            ))}
        </SimpleGrid>
    )
}

export default Grid2
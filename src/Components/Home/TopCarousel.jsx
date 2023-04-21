import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const TopCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const content = [
        {
            src: "https://images.bewakoof.com/uploads/grid/app/1x1-MEN-S-OVERSIZED-TEES-M-1681736256.jpg",
        },
        {
            src: "https://images.bewakoof.com/uploads/grid/app/1x1-theultimatejoggers-common-1681286426.jpg",
        },
        {
            src: "https://images.bewakoof.com/uploads/grid/app/1x1-Bestsellers-Restocked-common-1681736879.jpg",
        },
        {
            src: "https://images.bewakoof.com/uploads/grid/app/720x720-MinionBananaDay-common-01-1681836349.jpg",
        },
    ];
    return (
        <Box w="100%" mt={"2%"}>
            <Carousel responsive={responsive}>
                {content &&
                    content.map((el, i) => (
                        <Box
                            key={i}
                            borderRadius={10}
                            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                            bgImage={el.src}
                            bgSize="cover"
                            bgPosition={"center"}
                            zIndex="1"
                            bgRepeat={"no-repeat"}
                            mr="1%"
                            h="600px"
                        >
                        </Box>
                    ))}
            </Carousel>
        </Box>
    )
}

export default TopCarousel



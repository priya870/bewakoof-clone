import { Box } from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SecondCarousel = () => {
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
            src: "https://images.bewakoof.com/uploads/grid/app/1x1-revmped-mens--boxers-1681307994.jpg",
        },
        {
            src: "https://images.bewakoof.com/uploads/grid/app/1x1-revmped-boyfriend-tees-1681370744.jpg",
        },
        {
            src: "https://images.bewakoof.com/uploads/grid/app/1x1-pyjamas-common-1680268331.jpg",
        },
        {
            src: "https://images.bewakoof.com/uploads/grid/app/1x1-bdaylogo-bags-common-1680268706.jpg",
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
                            bgImage={el.src}
                            bgSize="cover"
                            bgPosition={"center"}
                            zIndex="1"
                            ml={"2%"}
                            bgRepeat={"no-repeat"}
                            h="550px"
                        >
                        </Box>
                    ))}
            </Carousel>
        </Box>
    )
}

export default SecondCarousel
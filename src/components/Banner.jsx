import { Box } from "@chakra-ui/react";
import React from "react";

//react carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//importing image

import images from "../assets/banner/index";

const Banner = () => {
  return (
    <Box maxW="container.full" className="h-10 md:mx-20 mx-10">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        swipeable={true}
      >
        {images.map((img) => (
          <div>
            <img
              key={img.id}
              className="rounded-md drop-shadow-lg object-cover"
              src={img}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;

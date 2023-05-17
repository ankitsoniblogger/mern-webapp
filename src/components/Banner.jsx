import { Box } from "@chakra-ui/react";
import React from "react";

//react carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//importing image
import images from "../assets/banner/index";

const Banner = () => {
  return (
    <Box maxW="container.full" className="md:mx-20 mx-10">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        swipeable={true}
        infiniteLoop={true}
      >
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden object-cover">
            <img
              className="rounded-md h-96 drop-shadow-lg object-cover"
              src={img}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;

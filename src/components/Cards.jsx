import { Box } from "@chakra-ui/react";
import React from "react";
import vCard from "../assets/cards/vCard.jpg";
import card from "../assets/cards/card1.jpg";
import img1 from "../assets/cards/img1.jpg";
import img2 from "../assets/cards/img2.jpg";
import img3 from "../assets/cards/ing3.jpg";

const Cards = () => {
  return (
    <Box maxW="container.full" className="md:mx-20 mx-10">
      <div className="grid text-dark lg:grid-cols-3 md:grid-cols-2 object-cover gap-4">
        <div className=" rounded-md ">
          <img
            src={img1}
            className="lg:h-[250px] h-[250px] w-full rounded-md object-cover"
            alt=""
          />
        </div>
        <div className=" rounded-md ">
          <img
            src={img2}
            className=" lg:h-[250px] h-[250px] w-full rounded-md object-cover"
            alt=""
          />
        </div>
        <div className="drop-shadow-xl overflow-hidden row-span-2">
          <img
            className=" xl:h-[670px] lg:h-[520px] h-[250px] w-full rounded-md object-cover"
            src={vCard}
            alt=""
          />{" "}
        </div>
        <div className="drop-shadow-xl overflow-hidden md:col-span-2">
          <img
            className="xl:h-[400px] lg:h-[250px] h-[250px] w-full object-cover rounded-md"
            src={img3}
            alt=""
          />{" "}
        </div>
      </div>
    </Box>
  );
};

export default Cards;

import { Box } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box
      maxW="container.full"
      className="flex pt-10 h-10 md:mx-20 mx-10 items-center justify-between"
    >
      <h1 className="text-xl font-bold cursor-pointer">Logo</h1>

      <div className="flex items-center gap-10">
        <ul className="lg:flex hidden items-center gap-10 text-base">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Pages</li>
        </ul>
        <button className="bg-light px-10 py-3 rounded-full">
          Get Started
        </button>
      </div>
    </Box>
  );
};

export default Navbar;

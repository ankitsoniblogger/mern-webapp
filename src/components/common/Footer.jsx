import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box maxW="container.full" className="md:mx-20 mx-10">
      <div>
        <h1 className="text-center font-medium text-2xl text-white tracking-tight">
          Footer Logo.
        </h1>
        <ul className="flex gap-10 items-center justify-center mt-6">
          <li>About</li>
          <li>Legel</li>
          <li>FAQ</li>
          <li>Service</li>
          <li>Blogs</li>
        </ul>
        <div className="md:flex text-center mt-6 text-sm tracking-tight items-center justify-between">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} Copyright | Made with Love ❤️{" "}
          </p>
          <ul className="flex md:mt-0  mt-2 justify-center items-center gap-4">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Footer;

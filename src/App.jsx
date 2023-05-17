import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

const App = () => {
  return (
    <Box
      maxW="container.full"
      className="bg-dark h-screen text-white font-[Inter] flex flex-col gap-20"
    >
      <Navbar />
      <Banner />
    </Box>
  );
};

export default App;

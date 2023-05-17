import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box
      maxW="container.full"
      className="bg-dark pb-10 text-white font-[Inter] flex flex-col gap-20"
    >
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
    </Box>
  );
};

export default App;

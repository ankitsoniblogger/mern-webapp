import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About";

const App = () => {
  return (
    <Router>
      <Box
        maxW="container.full"
        className="bg-dark pb-10 text-white font-[Inter] flex flex-col gap-20"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;

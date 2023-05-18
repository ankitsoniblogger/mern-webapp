import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Example from "./Modal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      maxW="container.full"
      className="flex pt-10 h-10 md:mx-20 mx-10 items-center justify-between"
    >
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <h1>HEllo</h1>
          </ModalBody>
        </ModalContent>
      </Modal>
      <h1 className="text-xl font-bold cursor-pointer">Logo</h1>

      <div className="flex items-center gap-10">
        <ul className="lg:flex hidden items-center gap-10 text-base">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Pages</li>
        </ul>
        <button
          onClick={ (e) =>{
            <Example/>
          }}
          className="bg-light px-10 py-3 rounded-full"
        >
          Get Started
        </button>
      </div>
    </Box>
  );
};

export default Navbar;

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  Image,
} from "@chakra-ui/react";
import Logo02 from "../utils/Logo02.png";

export default function NavBar({ onOpen, onClose, account }) {
  return (
    <Flex bg="gray.100" align="center">
      <Box p="2">
        <Heading>zpaze-z</Heading>
        {/* <Image src={Logo02} alt="Logo01" boxSize="80px" objectFit="cover" /> */}
      </Box>
      <Spacer />
      <Box p="2">
        {account ? (
          <Text>{account}</Text>
        ) : (
          <Button colorScheme="teal" onClick={onOpen}>
            Connect Wallet สิไอ้งั่ง
          </Button>
        )}
      </Box>
    </Flex>
  );
}

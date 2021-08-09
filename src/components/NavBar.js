import React from "react";
import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

export default function NavBar({ onOpen, onClose, account }) {
  return (
    <Flex bg="gray.100" align="center">
      <Box p="2">
        <Heading size="md">LOGO</Heading>
      </Box>
      <Spacer />
      <Box p="2">
        {account ? (
          <Text>{account}</Text>
        ) : (
          <Button colorScheme="teal" onClick={onOpen}>
            Connect Wallet
          </Button>
        )}
      </Box>
    </Flex>
  );
}

import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Box,
  Flex,
  Image,
  Text,
  Spacer,
} from "@chakra-ui/react";
import metamask from "../utils/metamask.svg";
import Web3 from "web3";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account, setAccount] = useState();

  async function connnectMetamask() {
    loadWeb3();

    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    onClose();
  }

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  return (
    <>
      <NavBar onOpen={onOpen} onClose={onClose} account={account} />

      <Box tabIndex={-1}>Home page</Box>

      <Modal sizes="xs" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader bg="gray.100">Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="center">
              <Button onClick={connnectMetamask} bg="orange.500" size="md">
                <Image
                  src={metamask}
                  alt="metamask"
                  boxSize="20px"
                  objectFit="cover"
                />
                <Text color="white" fontSize="lg">
                  Metamask
                </Text>
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

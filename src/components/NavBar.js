import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Nuukeng from "../components/images/nuukeng.png";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#a8dfff">
          <DrawerCloseButton />
          <DrawerHeader>Nuukeng</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex
        backgroundColor="#a8dfff"
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 8 }}
        borderBottom={1}
        borderStyle={"solid"}
        position="absolute"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        width="full"
      >
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          position="absolute"
          left={4}
          bgColor="#a8dfff"
          fontSize={"25px"}
        />

        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            width="80px"
            height="30px"
            objectFit="cover"
            src={Nuukeng}
            alt="logo"
          />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;

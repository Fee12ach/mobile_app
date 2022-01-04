//login
import React, { Fragment } from "react";
import {
  Box,
  Center,
  Input,
  Stack,
  Text,
  Button,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Nuukeng from "../components/images/nuukeng.png";
import Background from "../components/images/Background.png";
import google from "../components/images/google.png";
import Line from "../components/images/Line.png";

const LoginPage = () => {
  return (
    <Fragment>
      <Box
        backgroundImage={Background}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="100vh"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Stack spacing={4} my={4}>
          <Image
            width="260px"
            height="100px"
            objectFit="cover"
            src={Nuukeng}
            alt="logo"
          />
          <Text fontSize="md" color="#06C755">
            หนูเก่งพื้นที่เรียนออนไลน์สำหรับน้อง ๆ
          </Text>
          <FormControl>
            <FormLabel textAlign="center" value="" color="#2874A6" my="2">
              USERNAME
            </FormLabel>
            <Input variant="filled" placeholder="Username" />
            <FormLabel textAlign="center" value="" color="#2874A6" my="2">
              PASSWORD
            </FormLabel>
            <Input variant="filled" placeholder="Password" type="password" />
          </FormControl>
          <Button color="white" size="md" bgColor="#2874A6" boxShadow="lg">
            Login
          </Button>

          <Box color="#2874A6">
            <Link to="/forgotpassword">
              <Text textAlign="right" fontSize="xs">
                Forgot password?
              </Text>
            </Link>
            <Text fontSize="xs">or</Text>
            <Box as={Link} to="/register">
              <Text fontSize="xs">resister?</Text>
            </Box>{" "}
          </Box>

          <Button
            color="black"
            size="md"
            bgColor="white"
            justifyContent="space-between"
            fontSize="15"
            boxShadow="lg"
          >
            <HStack spacing="7">
              <Box>
                <Image
                  boxSize="25px"
                  objectFit="cover"
                  src={google}
                  alt="google"
                />
              </Box>
              <Box>Sign in with Google</Box>
            </HStack>
          </Button>
          <Button
            color="white"
            size="md"
            bgColor="#06C755"
            justifyContent="space-between"
            fontSize="15"
            boxShadow="lg"
          >
            <HStack spacing="7">
              <Box>
                <Image boxSize="25px" objectFit="cover" src={Line} alt="Line" />
              </Box>
              <Box>Sign in with Line</Box>
            </HStack>
          </Button>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default LoginPage;

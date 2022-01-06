import React, { Fragment } from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Center,
  HStack,
  Input,
  Text,
  Avatar,
  IconButton,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";
import Background from "../components/images/Background.png";
import { Link } from "react-router-dom";

import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

const Register = () => {
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
        <Box p="6">
          <Box m="4">
            <Heading fontSize="30px" color="#2874A6">
              ลงทะเบียน
            </Heading>
            <Center>
              <label
                style={{ position: "relative" }}
                htmlFor="photo-project-file"
              >
                <Avatar m="2.5" borderRadius="100" boxSize="120px" />
                <IconButton
                  isRound
                  as="label"
                  bgColor="white"
                  htmlFor="photo-project-file"
                  // colorScheme='linkedin'
                  position="absolute"
                  top={20}
                  left={105}
                  // zIndex={-1}
                  size="sm"
                  fontSize={"15px"}
                  zIndex="banner"
                  boxShadow="lg"
                  // variant="solid"
                  // isDisabled
                  icon={<FaCamera style={{ zIndex: -1 }} />}
                  color="green.500"
                />
                <input
                  accept="image/*"
                  id="photo-project-file"
                  type="file"
                  style={{ display: "none" }}
                />
                {/* <Text isTruncated mt={5} align={'center'} fontSize={'lg'} color={'gray.500'}>
                                        {fileavatar?.data?.name}
                                    </Text> */}
                {/* </Stack > */}
              </label>
            </Center>
            <FormControl>
              <HStack mt="6">
                <Input
                  size="md"
                  placeholder="ชื่อ"
                  variant="filled"
                  textAlign="center"
                />
                <Input
                  size="md"
                  placeholder="นามสกุล"
                  variant="filled"
                  textAlign="center"
                />
              </HStack>
              <InputGroup>
                <InputLeftAddon
                  pointerEvents="none"
                  children={<CgProfile color="#0a7e8c" />}
                  mt="4"
                  fontSize="1.3em"
                />
                <Input
                  size="md"
                  placeholder="ชื่อผู้ใช้งาน"
                  variant="filled"
                  mt="4"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon
                  pointerEvents="none"
                  children={<HiOutlineMail color="#0a7e8c" />}
                  mt="4"
                  fontSize="1.3em"
                />
                <Input size="md" placeholder="อีเมล" variant="filled" mt="4" />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon
                  pointerEvents="none"
                  children={<RiLockPasswordLine color="#0a7e8c" />}
                  mt="4"
                  fontSize="1.3em"
                />
                <Input
                  size="md"
                  placeholder="รหัสผ่าน"
                  type="password"
                  variant="filled"
                  mt="4"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon
                  pointerEvents="none"
                  children={<RiLockPasswordLine color="#0a7e8c" />}
                  mt="4"
                  fontSize="1.3em"
                />
                <Input
                  size="md"
                  placeholder="ยืนยันรหัสผ่าน"
                  variant="filled"
                  type="password"
                  mt="4"
                />
              </InputGroup>
            </FormControl>
            <HStack justifyContent="center">
              <Button bgColor="#06C755" color="white" variant="solid" mt="8">
                สมัครสมาชิก
              </Button>
            </HStack>
            <nav>
              <Link to="/">
                <Text as="u" fontSize="xs" color="blue">
                  Back to login
                </Text>
              </Link>
            </nav>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};
export default Register;

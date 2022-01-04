import React, { Fragment } from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Center,
  HStack,
  Input,
  Text,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import Background from "../components/images/Background.png";
import { Link } from "react-router-dom";
// import photox from './photo/tu.jpg'

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
                <Avatar
                  m="2.5"
                  borderRadius="100"
                  boxSize="120px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
                <IconButton
                  isRound
                  as="label"
                  bgColor="white"
                  htmlFor="photo-project-file"
                  // colorScheme='linkedin'
                  position="absolute"
                  top={20}
                  left={115}
                  // zIndex={-1}
                  size="xs"
                  fontSize={"15px"}
                  zIndex="banner"
                  boxShadow="lg"
                  // variant="solid"
                  // isDisabled
                  icon={<FaPencilAlt style={{ zIndex: -1 }} />}
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
              <Input
                size="md"
                placeholder="ชื่อผู้ใช้งาน"
                variant="filled"
                textAlign="center"
                mt="4"
              />
              <Input
                size="md"
                placeholder="อีเมล"
                variant="filled"
                textAlign="center"
                mt="4"
              />
              <Input
                size="md"
                placeholder="รหัสผ่าน"
                type="password"
                variant="filled"
                textAlign="center"
                mt="4"
              />
              <Input
                size="md"
                placeholder="ยืนยันรหัสผ่าน"
                variant="filled"
                type="password"
                textAlign="center"
                mt="4"
              />
            </FormControl>
            <HStack justifyContent="center">
              <Button bgColor="#06C755" color="white" variant="solid" mt="8">
                สมัครสมาชิก
              </Button>
            </HStack>
            <nav>
              <Link to="/login">
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

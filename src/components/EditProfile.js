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
  InputLeftElement,
} from "@chakra-ui/react";
import Background from "../components/images/Background.png";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { MdPhoneIphone } from "react-icons/md";

const EditProfile = () => {
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
            <Heading fontSize="30px" color="#2874A6" textAlign="center">
              เเก้ไขข้อมูลส่วนตัว
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
                  left={105}
                  // zIndex={-1}
                  size="sm"
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
                  variant="Flushed"
                  textAlign="center"
                />
                <Input
                  size="md"
                  placeholder="นามสกุล"
                  variant="Flushed"
                  textAlign="center"
                />
              </HStack>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CgProfile color="#0a7e8c" />}
                  mt="4"
                  fontSize="1.3em"
                />
                <Input
                  size="md"
                  placeholder="ชื่อผู้ใช้งาน"
                  variant="Flushed"
                  mt="4"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<HiOutlineMail color="#0a7e8c" />}
                  mt="4"
                  fontSize="1.3em"
                />
                <Input size="md" placeholder="อีเมล" variant="Flushed" mt="4" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdPhoneIphone color="#0a7e8c" />}
                  mt="4"
                  fontSize="1.3em"
                />
                <Input
                  size="md"
                  placeholder="เบอร์โทรศัพท์"
                  variant="Flushed"
                  mt="4"
                />
              </InputGroup>
            </FormControl>
            <HStack justifyContent="center">
              <Button bgColor="#06C755" color="white" variant="solid" mt="8">
                บันทีก
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
export default EditProfile;

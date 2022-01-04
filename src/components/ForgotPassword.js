import React, { Fragment } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import bgImage from "../components/images/Background.png";
import fgImage from "../components/images/password.png";
import { Link } from "react-router-dom";

const forgotpassword = () => {
  return (
    <Fragment>
      <Box
        backgroundImage={bgImage}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="100vh"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Box color="#2874A6" textAlign="center">
          <Heading>ลืมรหัสผ่าน</Heading>
          <Center>
            <Image
              src={fgImage}
              alt="forgotimage"
              width="180px"
              height="180px"
            />
          </Center>

          <Text m="2" fontWeight="bold">
            กรุณากรอกอีเมลของท่านเพื่อทำการรีเซ็ตรหัสผ่าน
          </Text>
          <Box m="6">
            <Input
              value=""
              variant="filled"
              placeholder="อีเมลของคุณ"
              size="md"
              textAlign="center"
            />
          </Box>

          <Button
            bgColor="#06C755"
            color="white"
            variant="solid"
            m="2"
            // size="md"
            width="100px"
          >
            ยืนยัน
          </Button>
          <Text m="2" fontWeight="bold">
            ท่านจะได้รับลิ้งเพื่อรีเซ็ตรหัสผ่านในอีเมลของท่าน
          </Text>
          <nav>
            <Link to="/login">
              <Text as="u" fontSize="xs" color="blue">
                Back to login
              </Text>
            </Link>
          </nav>
        </Box>
      </Box>
    </Fragment>
  );
};
export default forgotpassword;

import React, { Fragment } from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Wrap,
  WrapItem,
  Container,
} from "@chakra-ui/react";
import photox from "../components/images/photo.png";
import Background from "../components/images/Background.png";

const HomePage = () => {

  return (
    <Fragment>
      <Box
        backgroundImage={Background}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="100%"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Container maxW={"7xl"} py={16} as={Stack} spacing={4}>
          <Wrap justify={"space-around"} spacing="30px" pos="relative">
            <WrapItem>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                backgroundColor="White"
              >
                <Image src={photox} alt="hehe" />
                <Box p="6" textAlign="left">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      Normal
                    </Badge>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    <Text>วิชา Html เบื้องต้น</Text>
                  </Box>
                  <Box>
                    <Text>รายละเอียดวิชา</Text>
                    <Text>
                      เนื้อหาอยู่ในระดับชั้น .... เป้นเนื้อหาในส่วน ....
                    </Text>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                backgroundColor="White"
              >
                <Image src={photox} alt="hehe" />
                <Box p="6" textAlign="left">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      Normal
                    </Badge>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    <Text>วิชา Python เบื้องต้น</Text>
                  </Box>
                  <Box>
                    <Text>รายละเอียดวิชา</Text>
                    <Text>
                      เนื้อหาอยู่ในระดับชั้น .... เป้นเนื้อหาในส่วน ....{" "}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </WrapItem>

            <WrapItem>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                backgroundColor="White"
              >
                <Image src={photox} alt="hehe" />
                <Box p="6" textAlign="left">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      Normal
                    </Badge>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    <Text>วิชา Scracth เบื้องต้น</Text>
                  </Box>
                  <Box>
                    <Text>รายละเอียดวิชา</Text>
                    <Text>
                      เนื้อหาอยู่ในระดับชั้น .... เป้นเนื้อหาในส่วน ....
                    </Text>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Container>
      </Box>
    </Fragment>
  );
};
export default HomePage;
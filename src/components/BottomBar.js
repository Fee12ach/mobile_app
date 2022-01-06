import React, { Fragment, useState } from "react";
// import { Box, Image , Text } from "@chakra-ui/react";
import {
  BottomNavigation,
  BottomNavigationIcon,
  BottomNavigationLabel,
  BottomNavigationItem,
} from "chakra-ui-bottom-navigation";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillStar,
  AiFillBell,
} from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { HStack } from "@chakra-ui/react";

const BottomBar = () => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <BottomNavigation
        value={value}
        onChange={setValue}
        bottom="0"
        padding="1"
        backgroundColor="#a8dfff"
        position="fixed"
        width="full"
      >
        <HStack spacing="auto">
          <BottomNavigationItem boxSize="70px">
            <BottomNavigationIcon fontSize="1.6em">
              <AiFillHome />{" "}
            </BottomNavigationIcon>
            <BottomNavigationLabel fontSize="10px">
              หน้าหลัก
            </BottomNavigationLabel>
          </BottomNavigationItem>

          <BottomNavigationItem boxSize="70px">
            <BottomNavigationIcon fontSize="1.6em">
              <AiOutlineSearch />
            </BottomNavigationIcon>
            <BottomNavigationLabel fontSize="10px">ค้นหา</BottomNavigationLabel>
          </BottomNavigationItem>

          <BottomNavigationItem boxSize="70px">
            <BottomNavigationIcon fontSize="1.6em">
              <AiFillBell />{" "}
            </BottomNavigationIcon>
            <BottomNavigationLabel fontSize="10px">
              แจ้งเตือน
            </BottomNavigationLabel>
          </BottomNavigationItem>

          <BottomNavigationItem boxSize="70px">
            <BottomNavigationIcon fontSize="1.6em">
              <IoIosContact />{" "}
            </BottomNavigationIcon>
            <BottomNavigationLabel fontSize="10px">
              ข้อมูลส่วนตัว
            </BottomNavigationLabel>
          </BottomNavigationItem>
        </HStack>
      </BottomNavigation>
    </Fragment>
  );
};
export default BottomBar;

import "./Main.css";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import image from "../images/logo.png";

function Nav() {
  const [color, changeColor] = useState("transparent");

  const handleScroll = (e) => {
    if (window.pageYOffset > 10) {
      changeColor("#262F36");
    }
    if (window.pageYOffset === 0) {
      changeColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <Box
        height="11vh"
        position="fixed"
        top="0"
        left="0"
        right="0"
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        padding="15px 100px"
        zIndex="1000"
        fontFamily="Poppins"
        // backgroundColor="#262F36"
        background={color}
        // borderBottom="1px"
        // borderBottomColor="white"
      >
        <Box width="40vw">
          {/* <Image src={image} alt="logo" height="7vh" padding="0 5px" /> */}
          <Box>
            <Heading
              fontFamily="Poppins"
              fontWeight="lighter"
              color="white"
              fontSize={["1rem", "2xl"]}
              paddingTop="10px"
            >
              Royal Dental Care
            </Heading>
            {/* <Box
              fontFamily="roboto"
              color="white"
              fontSize="1rem"
              fontWeight="lighter"
              padding="0"
            >
              Your Smile Matters...
            </Box> */}
          </Box>
        </Box>
        <Box
          fontFamily="Roboto"
          color="white"
          fontSize={["13px"]}
          width="30vw"
          display={["none", "none", "flex"]}
          justifyContent="space-between"
          textTransform="uppercase"
          paddingTop="15px"
          _hover={{
            color: "#2b6cb0",
          }}
          fontFamily="Poppins"
        >
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Nav;

import "./Main.css";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "@chakra-ui/react";
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
        // height="11vh"
        position="fixed"
        top="0"
        left="0"
        right="0"
        width="100%"
        display={["block", "block", "block", "flex"]}
        justifyContent={["none", "none", "none", "space-between"]}
        alignItems="center"
        padding={["15px 10px", "15px 10px", "20px 10px", "20px 100px"]}
        zIndex="1000"
        fontFamily="Poppins"
        // backgroundColor="#262F36"
        background={color}
        // borderBottom="1px"
        // borderBottomColor="white"
      >
        <Box width={["100%", "100%", "100%", "40vw"]}>
          {/* <Image src={image} alt="logo" height="7vh" padding="0 5px" /> */}
          <Box>
            <Heading
              textAlign={["center", "center", "left", "left"]}
              fontFamily="Poppins"
              fontWeight="lighter"
              color="white"
              fontSize={["lg", "lg", "lg", "2xl"]}
              // paddingTop="10px"
              px="5"
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
          display={["none", "none", "none", "flex"]}
          justifyContent="space-between"
          textTransform="uppercase"
          // paddingTop="15px"

          fontFamily="Poppins"
        >
          <Link
            _hover={{
              color: "#2b6cb0",
            }}
            href="#"
          >
            Home
          </Link>
          <Link
            _hover={{
              color: "#2b6cb0",
            }}
            href="#details"
          >
            About
          </Link>
          <Link
            _hover={{
              color: "#2b6cb0",
            }}
            href="#services"
          >
            Services
          </Link>
          <Link
            _hover={{
              color: "#2b6cb0",
            }}
            href="#reviews"
          >
            Reviews
          </Link>

          <Link
            _hover={{
              color: "#2b6cb0",
            }}
            href="#contact"
          >
            Contact
          </Link>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Nav;

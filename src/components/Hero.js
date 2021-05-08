import "./Main.css";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
// import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

function Hero() {
  return (
    <Box>
      <Box
        backgroundImage="url(/10.jpg)"
        backgroundPosition={["center"]}
        height="100vh"
        backgroundSize="cover"
        // marginTop="10vh"
        position="relative"
      >
        <Box
          position="absolute"
          background="rgba(35, 37, 47, 0.7)"
          top="0"
          bottom="0"
          left="0"
          right="0"
        />
        <Box
          position="absolute"
          top="50%"
          left={["50%", "50%", "50%", "50%", "25%"]}
          transform="translate(-50%, -50%)"
          width={["85%", " auto ", "auto ", "auto "]}
        >
          <Fade top>
            <Heading
              fontSize={["4xl", "4xl", "4xl", "7xl"]}
              color="white"
              // bgGradient="linear(to-b, blue.300, blue.600)"
              // bgClip="text"
              fontWeight="normal"
              fontFamily="Poppins"
              margin="10px 0"
            >
              Your Health
            </Heading>
          </Fade>

          <Fade top>
            <Heading
              fontSize={["4xl", "4xl", "4xl", "7xl"]}
              color="white"
              // bgGradient="linear(to-b, blue.300, blue.600)"
              // bgClip="text"
              fontWeight="normal"
              fontFamily="Poppins"
              margin="10px 0"
            >
              Our first priority
            </Heading>
          </Fade>

          <Fade bottom>
            <Text
              // margin="20px 0"
              mb="6"
              ml="1"
              fontSize={["1rem", "1rem", "1.2rem"]}
              color="rgba(255, 255, 255, 0.5)"
            >
              Not sure what is going on with your teeth? <br /> Come in Today
              for a Check up
            </Text>
          </Fade>

          <Box>
            <Fade bottom>
              <Button
                // as="a"
                // target="_blank"
                // variant="outline"
                background="#33a5b4"
                // color="white"
                // _hover={{ bg: "rgb(0, 143, 161)" }}
                // _active={{
                //   // bg: "#2b6cb0",
                //   transform: "scale(0.98)",
                //   borderColor: "none",
                // }}
              >
                CALL US NOW
              </Button>
            </Fade>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;

import { Box, Image, Heading, Text, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Contact() {
  return (
    <Box
      display={["block", "block", "flex"]}
      justifyContent={["none", "none", "space-between"]}
      marginX="10vw"
      marginBottom="10vh"
    >
      <Box>
        <Heading
          fontSize={["1rem", "2xl", "4xl"]}
          color="rgb(0, 143, 161)"
          marginBottom="30px"
          textTransform="uppercase"
        >
          Contact Us
        </Heading>
        <Text paddingRight={["0px", "0px", "50px"]}>
          Lorem Ipsum is simply du my text of the pritin industry. Lorm Ipsum
          hasbeen the industry's standardsdummy text eversince the 1500s, when
          an unknown printer took a galley of type and scramble it to make type
          specimen book. It has survived not only five centurie, but also the
          leap into
        </Text>
      </Box>
      <Box>
        <Stack
          spacing={3}
          width={["auto", "auto", "40vw"]}
          marginTop="20px"
          boxShadow="xl"
          padding="20px"
        >
          <Input variant="outline" placeholder="Enter Full Name" />
          <Input variant="outline" placeholder="Enter Email" />
          <Textarea placeholder="Enter Message" />
          <Button background="rgb(0, 143, 161)" color="white" marginY="30px">
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Contact;

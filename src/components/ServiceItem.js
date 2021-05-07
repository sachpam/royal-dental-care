import { Box, Heading, Text, Image } from "@chakra-ui/react";

function ServiceItem({ title, text, img }) {
  return (
    <>
      <Box
        boxShadow="2xl"
        p="6"
        // rounded="md"
        bg="white"
        // padding="30px"
        color="rgb(0, 143, 161)"
      >
        <Box
          height=""
          fontSize="5xl"
          fontWeight="lighter"
          marginRight="15px"
          textAlign="center"
        >
          <Image src={img} width="317px" height="189px" padding="0 " />
        </Box>
        <Box>
          <Heading
            fontSize="1.5rem"
            fontWeight="lighter"
            textTransform="uppercase"
            margin="20px"
          >
            {title}
          </Heading>
          <Text
            fontSize="1rem"
            fontWeight="lighter"
            color="black"
            margin="20px"
          >
            {text}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default ServiceItem;

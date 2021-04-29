import { Box, Heading, Text, Image } from "@chakra-ui/react";

function DetailItem({ title, text, icon, image }) {
  return (
    <>
      <Box
        display="flex"
        // alignItems="center"
        boxShadow="2xl"
        p="6"
        // rounded="md"
        bg="white"
        padding="30px"
        opacity="0.8"
        backgroundColor="rgb(0, 143, 161)"
        color="white"
      >
        <Box height="" fontSize="5xl" fontWeight="lighter" marginRight="15px">
          <i class={icon}></i>
        </Box>
        <Box>
          <Heading
            fontSize="1.5rem"
            fontWeight="lighter"
            textTransform="uppercase"
            marginBottom="10px"
          >
            {title}
          </Heading>
          <Text fontSize="1rem" fontWeight="lighter">
            {text}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default DetailItem;

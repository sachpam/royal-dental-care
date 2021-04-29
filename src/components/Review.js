import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import img from "../images/user.png";
import star from "../images/star.png";

function Review() {
  return (
    <Box
      backgroundColor="rgb(0, 143, 161)"
      opacity="0.8"
      // height="75vh"
      marginBottom="15vh"
      padding="30px"
      paddingX="5vw"
    >
      <Heading
        color="white"
        textAlign="center"
        marginBottom="30px"
        textTransform="uppercase"
      >
        Testimonials
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={["5", "10"]}
      >
        <ReviewItem
          name="Shashi J Jayasingha"
          text="I am very impressed  by the excellent service.
        If you have any fear of going to a dentist  as I extremely do.Then i would reccomend trying of Royal Dental Care. And thank you so much Doctor Nandana Ranasinghe for your best service."
        />
        <ReviewItem
          name="Chinthaka Warnakulasooriya"
          text="Dr. Nandana Rajasinghe is a wonderful dentist! I am always impressed with his knowledge of the field of dentistry, the technologies he employs to better diagnose and treat patients, and his personal attention to details both with my treatment and the time he takes to connect with me on a personal level.I happily refer my friends and family to his practice.Also The facility is clean and well kept."
        />
        <ReviewItem
          name="Shamilka Peterson"
          text="Dear Dr.Chathurangi Thank you so much for reccomend Dr.Nandana.(Royal Dental Care)
        He is truly care about your comfort and well being!.The facility is clean and well kept.👍☺️"
        />
      </Grid>
    </Box>
  );
}

function ReviewItem({ name, text }) {
  return (
    <Box background="white" boxShadow="2xl" paddingX="40px" paddingY="20px">
      <Box display="flex" paddingY="20px">
        <Image
          src={img}
          width="9vh"
          height="8vh"
          padding="0 5px"
          marginRight="20px"
        />
        <Box>
          {name} <Image src={star} width="8vw" />
        </Box>
      </Box>
      <Box>{text}</Box>
    </Box>
  );
}

export default Review;

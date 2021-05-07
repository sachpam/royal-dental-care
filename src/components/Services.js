import ServiceItem from "./ServiceItem";
import { Box, Image, Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import image1 from "../images/img1_1.jpg";
import image2 from "../images/img2_1.jpg";
import image3 from "../images/img3_1.jpg";
import image4 from "../images/img4_2.png";
import image5 from "../images/img5_1.jpg";
import image6 from "../images/img6_1.jpg";

function Services() {
  return (
    <Box marginX={("0px", "0px", "0px", "10vw")} marginY="10vh" id="services">
      <Heading
        color="rgb(0, 143, 161)"
        textAlign="center"
        margin="30px"
        marginBottom="40px"
        textTransform="uppercase"
      >
        Our Services
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={["5", "10"]}
      >
        <ServiceItem
          img={image1}
          title="Regular Checkup"
          text="Check your oral health status to make sure everything's okay"
        />
        <ServiceItem
          img={image2}
          title="Cosmetic Dentistry"
          text="There are many new treatments to beautify teeth"
        />
        <ServiceItem
          img={image3}
          title="Orthodontics"
          text="loream jfdiusdf jnksdjfns djfsen kjfnsjdf ksnbnfksj fjfnksfn"
        />
        <ServiceItem
          img={image4}
          title="Implants"
          text="Lohbfusd jnbdjhd hjfhdf jbhja d bj a knjnfdj"
        />
        <ServiceItem
          img={image5}
          title="Root canal"
          text="gvfhweduwghv uvbj djbdwjeh djbhj whbwj"
        />
        <ServiceItem
          img={image6}
          title="Crowns and Bridges"
          text="jefwk knefwje kjnkwje nfwke jnjkn nfkwlf kejfn jknfds"
        />
      </Grid>
    </Box>
  );
}

export default Services;

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
        textTransform="uppercase">
        Our Services
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={["5", "10"]}>
        <ServiceItem
          img={image1}
          title="Regular Checkup"
          text="Routine dental checkups are important preventive appointments to examines your oral health, detects issues early, to maintain optimal dental health. Recommended every 6 months, these visits help prevent cavities, gum disease, and other dental problems, ensuring a healthy and confident smile."
        />
        <ServiceItem
          img={image2}
          title="Cosmetic Dentistry"
          text="Cosmetic dentistry focuses on improving the appearance of the teeth, gums, and smile. It includes treatments such as teeth whitening, veneers, bonding, and gum contouring to enhance aesthetics and boost confidence."
        />
        <ServiceItem
          img={image3}
          title="Orthodontics"
          text="Orthodontic treatment involves straightening and aligning crooked or misaligned teeth using braces, Lingual braces  or clear aligners. It helps improve the appearance of the smile and corrects bite issues. Discreet Orthodontic option available for straightening teeth without visible brackets or wires."
        />
        <ServiceItem
          img={image4}
          title="Implants"
          text="Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone. They provide a stable foundation for replacement teeth, such as crowns or bridges, to restore function and aesthetics."
        />
        <ServiceItem
          img={image5}
          title="Root canal"
          text="Root canal treatment is a procedure to save a tooth that is infected or decayed deep inside. The infected pulp is removed, and the inside of the tooth is cleaned and sealed to prevent further infection."
        />
        <ServiceItem
          img={image6}
          title="Crowns and Bridges"
          text="Dental crowns are caps that cover damaged teeth, restoring their strength and appearance. Bridges are prosthetic devices that replace missing teeth by bridging the gap between adjacent teeth, supported by dental crowns or implants. "
        />
      </Grid>
    </Box>
  );
}

export default Services;

import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <Box>
      <Box
        paddingX="10vw"
        paddingY="10vh"
        color="white"
        backgroundColor="#262F36">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "30% 10% 20% 40%",
          ]}
          gap={6}>
          <Box>
            <Heading
              fontSize={["1rem", "1rem", "2rem"]}
              fontWeight="lighter"
              marginBottom="20px">
              ROYAL DENTAL CARE
            </Heading>
            <Text color="#adb5bd" paddingRight="40px">
              Highly advanced Dental Clinic, which offers all kinds of dental
              treatment including Orthodontics, implants. Please send and
              inquiry or call us directly for further information
            </Text>
          </Box>
          <Box>
            <Heading
              fontSize={["1rem", "1rem", "1.5rem"]}
              fontWeight="bold"
              marginBottom="20px">
              Links
            </Heading>
            <Text>
              <List spacing="3">
                <ListItem>
                  <Link color="#adb5bd" href="#">
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#adb5bd" href="#">
                    Services
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#adb5bd" href="#">
                    Testimonials
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#adb5bd" href="#">
                    Contact
                  </Link>
                </ListItem>
              </List>
            </Text>
          </Box>
          <Box>
            <Heading
              fontSize={["1rem", "1rem", "1.5rem"]}
              fontWeight="bold"
              marginBottom="20px">
              Services
            </Heading>
            <List spacing="3">
              <ListItem>
                <Link color="#adb5bd">Regular Checkup</Link>
              </ListItem>
              <ListItem>
                <Link color="#adb5bd">Orthodontics</Link>
              </ListItem>
              <ListItem>
                <Link color="#adb5bd">Cosmetic Dentistry</Link>
              </ListItem>
              <ListItem>
                <Link color="#adb5bd">Implants</Link>
              </ListItem>
              <ListItem>
                <Link color="#adb5bd">Wisdom tooth removal</Link>
              </ListItem>
              <ListItem>
                <Link color="#adb5bd">Crowns and Bridges</Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Heading
              fontSize={["1rem", "1rem", "1.5rem"]}
              fontWeight="bold"
              marginBottom="20px">
              Contact Us
            </Heading>
            <List spacing="3">
              <ListItem>
                <Link
                  color="#adb5bd"
                  href="https://maps.app.goo.gl/GSXTchX4SMfo6efg8">
                  <i class="fas fa-map-marker-alt"> &nbsp; &nbsp; </i>Location
                </Link>
              </ListItem>
              <ListItem>
                <Link color="#adb5bd" href="tel:+94714900047">
                  <i class="fas fa-phone-alt"> &nbsp; &nbsp; </i>0714900047
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color="#adb5bd"
                  href="mailto:royaldentalcare.kandy@gmail.com">
                  <i class="fas fa-at"> &nbsp; &nbsp; </i>
                  royaldentalcare.kandy@gmail.com
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  color="#adb5bd"
                  href="https://www.facebook.com/RoyalDentalCareKandy/"
                  target="_blank">
                  <i class="fab fa-facebook"> &nbsp; &nbsp; </i>Our FB page
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color="#adb5bd"
                  href="https://royal-dental-care.netlify.app/">
                  <i class="fas fa-globe"> &nbsp; &nbsp; </i>
                  https://royal-dental-care
                </Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Box>
      <Box
        borderTop="1px"
        borderTopColor="#adb5bd"
        width="100%"
        // marginTop="30px"
        padding="10px"
        textAlign="center"
        backgroundColor="#262F36"
        color="#adb5bd">
        Royal Dental Care Kandy 2024 © All Rights Reserved
      </Box>
    </Box>
  );
}

export default Footer;

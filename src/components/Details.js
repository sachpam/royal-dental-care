import DetailItem from "./DetailItem";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function Details() {
  return (
    <Box id="details">
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
        ]}
      >
        <DetailItem
          icon="far fa-clock"
          title="Open Hours"
          text={
            <Box>
              weekdays &nbsp; &nbsp; &nbsp; &nbsp; 4.30pm - 6.00pm <br />
              Saturday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3.00pm - 6.00pm <br />
              Sunday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9.00am - 12.00pm
            </Box>
          }
        />
        <DetailItem
          icon="far fa-calendar-check"
          title="Appointment"
          text=" Appointments are available, call us today to book your appoinment (0714900047)"
        />
        <DetailItem
          icon="fas fa-file-invoice-dollar"
          title="Payment"
          text={
            <Box>
              {" "}
              Dentistry is not expensive but neglegence is. <br /> Easy payment
              plans to suit your needs.{" "}
            </Box>
          }
        />
      </Grid>
    </Box>
  );
}

export default Details;

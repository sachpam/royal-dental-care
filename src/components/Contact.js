import { Box, Image, Heading, Text, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import React from "react";

export default function Contact() {
  // Initialize EmailJS
  // document.addEventListener("DOMContentLoaded", function () {
  //   emailjs.init({
  //     publicKey: "7XCg6NR2NfM8W6cZF",
  //     // Do not allow headless browsers
  //     blockHeadless: false,
  //     limitRate: {
  //       // Set the limit rate for the application
  //       id: "app",
  //       // Allow 1 request per 10s
  //       throttle: 1000,
  //     },
  //   });
  // });

  function sendEmail(e) {
    e.preventDefault(); // Prevent form submission from reloading the page

    emailjs.init({
      publicKey: "7XCg6NR2NfM8W6cZF",
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 20000,
      },
    });

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_9rr9yoq",
        "template_mcvjrez",
        e.target,
        "7XCg6NR2NfM8W6cZF"
      )
      .then(
        function (response) {
          console.log("Email sent successfully!", response);
          // Optionally, display a success message to the user
          alert("Email sent successfully!");
        },
        function (error) {
          console.error("Email could not be sent:", error);
          // Optionally, display an error message to the user
          alert("Error sending email. Please try again later.");
        }
      );
  }

  return (
    <Box
      id="contact"
      display={["block", "block", "flex"]}
      justifyContent={["none", "none", "space-between"]}
      marginX={["20px", "10vw"]}
      marginBottom="10vh"
      marginTop="15vh">
      <Box
        marginBottom={["0px", "0px", "0px", "20px"]}
        Width={["100px", "100px", "50px", "30vw"]}
        boxSizing="border-box">
        <Heading
          fontSize={["1.3rem", "2xl", "4xl"]}
          color="rgb(0, 143, 161)"
          marginBottom="50px"
          textTransform="uppercase"
          textAlign={["center", "center", "left", ""]}>
          Contact Us
        </Heading>
        <Text paddingRight={["30px", "30px", "30px", "20px"]}>
          Contact us for a FREE consultation. Please note that an appointment is
          required prior to your visit. If you have any inquiries, feel free to
          send us a message.
        </Text>
      </Box>
      <Box>
        <Stack
          spacing={3}
          width={["auto", "auto", "40vw", "40vw"]}
          marginTop="20px"
          boxShadow="xl"
          padding="20px"
          className="container">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <Input
                  variant="outline"
                  placeholder="Enter Full Name"
                  className="form-control"
                  name="sender_name"
                  marginBottom="15px"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <Input
                  variant="outline"
                  placeholder="Enter Email"
                  type="sender_email"
                  className="form-control"
                  placeholder="Email Address"
                  name="sender_email"
                  marginBottom="15px"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <Textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                  required></Textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <Button
                  background="rgb(0, 143, 161)"
                  color="white"
                  marginY="30px"
                  type="submit"
                  className="btn btn-info"
                  value="Send Message">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Stack>
      </Box>
    </Box>
  );
}

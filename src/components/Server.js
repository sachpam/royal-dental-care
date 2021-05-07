import { Box, Image, Heading, Text, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import React from "react";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71sp1ec",
        "template_h4ccrjk",
        e.target,
        "user_Jps3fD5dlYHQ4vLgvhHD7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

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
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <Input
                variant="outline"
                placeholder="Enter Full Name"
                className="form-control"
                name="from_name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                hidden
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                value=""
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </Box>
  );
}

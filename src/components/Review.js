import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "@chakra-ui/react";
import img from "../images/user.png";
import star from "../images/star.png";

export default class Review extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Box
          id="reviews"
          backgroundColor="rgb(0, 143, 161)"
          opacity="0.8"
          // height="75vh"
          // marginBottom="10vh"
          // // padding="30px"
          paddingX={["25px", "25px", "25px", "5vw"]}
          py={["50px", "50px", "50px", "7vw"]}
        >
          <Heading
            color="white"
            textAlign="center"
            marginBottom="30px"
            textTransform="uppercase"
          >
            Testimonials
          </Heading>
          <Slider {...settings}>
            <div>
              <ReviewItem
                name="Shashi J Jayasingha"
                text="I am very impressed  by the excellent service.
          If you have any fear of going to a dentist  as I extremely do.Then i would reccomend trying of Royal Dental Care. And thank you so much Doctor Nandana Ranasinghe for your best service."
              />
            </div>
            <div>
              <ReviewItem
                name="Chinthaka Warnakulasooriya"
                text="Dr. Nandana Rajasinghe is a wonderful dentist! I am always impressed with his knowledge of the field of dentistry, the technologies he employs to better diagnose and treat patients, and his personal attention to details both with my treatment and the time he takes to connect with me on a personal level.I happily refer my friends and family to his practice.Also The facility is clean and well kept."
              />
            </div>
            <div>
              <ReviewItem
                name="Shamilka Peterson"
                text="Dear Dr.Chathurangi Thank you so much for reccomend Dr.Nandana.(Royal Dental Care)
          He is truly care about your comfort and well being!.The facility is clean and well kept.👍☺️"
              />
            </div>
            <div>
              <ReviewItem
                name="Sandaru Wijesinghe"
                text="I recommend this clinic for orthodontic work.  Highly appreciate the good work!"
              />
            </div>
            <div>
              <ReviewItem
                name="Shashi J Jayasingha"
                text="I am very impressed  by the excellent service.
          If you have any fear of going to a dentist  as I extremely do.Then i would reccomend trying of Royal Dental Care. And thank you so much Doctor Nandana Ranasinghe for your best service."
              />
            </div>
          </Slider>
        </Box>
        <Box
          paddingTop="59px"
          textAlign="center"
          backgroundColor="#262F36"
          // opacity="0.5"
          height="20vh"
          zIndex="-1000"
        >
          <Link
            zIndex="100"
            background="rgb(0, 143, 161)"
            color="white"
            fontSize="lg"
            padding={["10px", "10px", "10px", "10px 30px"]}
            borderRadius="10px"
            margin="20px 0px 100px 30px"
            href="https://supple.live/39HeQtawZWkpe2tB7"
          >
            All Reviews
          </Link>
          <Link
            zIndex="100"
            background="rgb(0, 143, 161)"
            color="white"
            fontSize="lg"
            padding={["10px", "10px", "10px", "10px 30px"]}
            borderRadius="10px"
            margin="20px 30px 100px 30px"
            href="https://supple.live/AUDudk9RPEPvT4H49"
          >
            Write Review
          </Link>
        </Box>
      </>
    );
  }
}

function ReviewItem({ name, text }) {
  return (
    <Box
      background="white"
      boxShadow="2xl"
      paddingX="50px"
      paddingY="20px"
      marginX="10px"
      boxSizing="border-box"
      // height="initial"
      height={[" ", "", "", "", "443px"]}
    >
      <Box display="flex" paddingY="40px">
        <Image
          src={img}
          width="9vh"
          height="8vh"
          padding="0 5px"
          // marginRight="20px"
        />
        <Box>
          {name} <Image src={star} width="8vw" />
        </Box>
      </Box>
      <Box>{text}</Box>
    </Box>
  );
}

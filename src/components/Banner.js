import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import BannerImage from "../assets/images/i2.png";
//typography is text element with styles
// <Button  sx={{backgroundColor:"#FF25625" , padding:"10px"}} variant='contained' color={'error'} href='exercises'>REGIMES</Button>
const Banner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color={"#CF1515"} fontWeight="600" fontSize="26px">
        STALWARTS
      </Typography>
      <Typography
        color={"darkturquoise"}
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        BREAK <br />
        BUILD <br />
        REPEAT
      </Typography>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        EXE
      </Typography>
      <Typography
        color={"grey"}
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
      >
        Click to view most followed exercise regime
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          REGIMES
        </a>
      </Stack>

      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        EXE
      </Typography>
      <img src={BannerImage} alt={"here comes "} className="hero-banner-img" />
    </Box>
  );
};

export default Banner;

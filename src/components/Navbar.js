import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/icons/My Fitness App-logos.jpeg"
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } ,justifyContent: 'none'}} px={'20px'}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="myfitnessapp"
          style={{ width: "200px", height: "100px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction={"row"}
        gap={"50px"}
        fontSize={"30px"}
        alignContent={"space-around"}
        alignItems={"flex-end"}
      >
        <Link
          to="/" 
          style={{
            textDecoration: "none",
            color: "#00FF10",
            borderBottom: "3px solid #FF2624",
          }}
        >
          Home
        </Link>
        <a
          href="/exercises"
          style={{ textDecoration: "none", color: "#FF0000" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

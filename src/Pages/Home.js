import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import SearchResults from "../components/searchResults";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <Banner />
    <SearchResults/>
      <Exercises />
    </Box>
  );
};

export default Home;

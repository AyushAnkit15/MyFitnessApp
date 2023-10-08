import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import SearchResults from "../components/searchResults";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");

  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Banner />
      <SearchResults
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;

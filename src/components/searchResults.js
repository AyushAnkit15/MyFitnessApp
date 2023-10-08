import React from "react";

import { exerciseOptions ,fetchData } from "../util/fetchData";
import { useState, useEffect } from "react";
import { Stack, Box, Typography, Button, TextField } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchResults = ({setExercises , bodyPart , setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setbodyParts] = useState([])
  useEffect(()=>{
    const fetchExercisesData =async ()=>{
      const bodyPartsData=await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);
      setbodyParts(['all' ,...bodyPartsData])
    }


    fetchExercisesData();
  },[])
  
  const searchHandler = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      
      const searchedResult = exercisesData.filter(
        (item) => (item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search))
      );
      setSearch('');
      setExercises(searchedResult)
    }
  };

  return (
    <Stack alignItems={"center"} mt={"38px"} justifyContent={"center"} p="20px">
      {" "}
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb={"50px"}
        textAlign={"center"}
      >
        Best Exercise Regimes <br />
        customized for you
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { xs: "350px", lg: "800px" },
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          height="76px"
          alignItems={"center"}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="REGIMES QUERIES"
          type="text"
        ></TextField>
        <Button
          onClick={searchHandler}
          className="search-btn"
          sx={{
            bgcolor: "#C209C1",
            color:'black' , 
            textTransform: "none",
            width: { lg: "155px", xs: "80px" },
            fontSize: { xs: "15px", lg: "20px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          borderRadius ="4px"
        >
          GO
        </Button>
      </Box>
      <Box sx={{position :'relative' ,width:'100%' , p:'20px'}}>
        <HorizontalScrollBar data = {bodyParts}
        bodyPart = {bodyPart} setBodyPart ={setBodyPart}  BodyParts/>
        
      </Box>
    </Stack>
  );
};

export default SearchResults;

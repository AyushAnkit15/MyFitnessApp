import React from "react";
import { Typography, Stack } from "@mui/material";
import icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="buttom"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        backgroundColor: "white",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "270px",
        cursor: "pointer",
        gap: "47px",
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
      }}
      onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top:1800 ,left :100 , behavior:"smooth"})
      }}
    >
      <img
        src={icon}
        alt="equipments"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography fontSize={'24px'} fontWeight={'bold'} color={'#3A1212'} textTransform={'capitalize'}>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;

import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import BPI from "../assets/icons/body-part.png";
import tI from "../assets/icons/target.png";
import eq from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetails = [
    {
      icon: BPI,
      name: bodyPart,
    },
    {
      icon: tI,
      name: target,
    },
    {
      icon: eq,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography fontWeight={"bold"} variant={"h4"} color={"grey"}>
        <span style={{textTransform:'capitalize'}}>{name}</span> 
        </Typography>
        <Typography variant="p">
          performing <span style={{textTransform:'capitalize'}} >{name}</span>  will help your {target} muscle grow at good rate
        </Typography>
        {extraDetails.map((item)=>{
          return(  <Stack key = {item.name} direction={'row'} gap={'24px'} alignItems={'center'}>

          <Button  sx={{ background: '#0a0a00', borderRadius: '50%', width: '100px', height: '100px' }}>
            <img src ={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />

          </Button>

          <Typography textTransform="capitalize" variant="h6">
            {item.name}
          </Typography>
        </Stack>)
        
          
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;

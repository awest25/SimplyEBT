import * as React from 'react';
import { Stack, Box } from "@mui/material";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import "../styles/MealDetails.css";
import { red } from '@mui/material/colors';

function MealDetails() {
  return (
    // <Box sx={{border:1}}>
    <Stack className="Meal-Details-Grid" direction="row" spacing={10} sx={{borderColor:red}}>
      
      <Stack spacing={2}>
        <h1 className="style">Meal Details</h1>
        <h2>Breakfast</h2>
        <p>breakfast meal</p>
        <h3>Lunch</h3>
        <p>lunch meal</p>
        <h4>Dinner</h4>
        <p>dinner meal</p>
      </Stack>
      <Box className="Button-Outline">
        
        <ModeEditOutlineIcon variant="outlined"></ModeEditOutlineIcon>
      </Box>
    </Stack>
    // </Box>
    
  );
}

export default MealDetails;
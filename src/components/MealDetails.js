import * as React from 'react';
import { Stack, Button, Container } from "@mui/material";
import "../styles/MealDetails.css";
import { red } from '@mui/material/colors';

function MealDetails() {
  return (
    <Stack direction="row" spacing={10} sx={{border:red}}>
      <Stack spacing={2}>
        <h1 className="style">Meal Details</h1>
        <h2>Breakfast</h2>
        <p>breakfast meal</p>
        <h3>Lunch</h3>
        <p>lunch meal</p>
        <h4>Dinner</h4>
        <p>dinner meal</p>
      </Stack>
    <Button variant="outlined">Edit</Button>
    </Stack>
  );
}

export default MealDetails;
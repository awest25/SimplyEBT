import * as React from 'react';
import { Grid } from "@mui/material";
import "../styles/MealDetails.css";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function MealDetails() {
  return (
    <Grid container spacing={10}>

      <Grid item sx={{border:1}}>
        <Grid item sx={{border:1}}>
          <h1 className="style">Meal Details</h1>
          <Button variant="outlined">Edit</Button>
        </Grid>
        <h2>Breakfast</h2>
        <p>breakfast meal</p>
        <h3>Lunch</h3>
        <p>lunch meal</p>
        <h4>Dinner</h4>
        <p>dinner meal</p>
      </Grid>

      <Grid item>
        <Button variant="outlined">Edit</Button>
      </Grid>

    </Grid>
  );
}

export default MealDetails;
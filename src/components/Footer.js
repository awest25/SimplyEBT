import * as React from 'react';
import { Box, Grid } from "@mui/material";
import "../styles/FooterStyles.css";
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

export default function BottomAppBar() {
  return (
    <Box className="Footer">
      <Grid container className="Entire-Footer">
        <Grid item className="individual-Titles">
          <h1 className="Titles">Support</h1>
        </Grid>
        <Grid item className="individual-Title">
          <h1 className="Titles">EBTea<EmojiFoodBeverageIcon></EmojiFoodBeverageIcon></h1>
        </Grid>
        <Grid item className="individual-Titles">
          <h1 className="Titles">About</h1>
        </Grid>
      </Grid>
    </Box>
  );
}
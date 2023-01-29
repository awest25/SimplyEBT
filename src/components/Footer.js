import * as React from 'react';
import { Box, Grid } from "@mui/material";

export default function BottomAppBar() {
  return (
    // <React.Fragment>
    //   <CssBaseline />
    //   <Paper square sx={{ pb: '50px' }}>
    //     <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
    //       Inbox
    //     </Typography>
          
    //   </Paper>
      // <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      //   <Toolbar>
      //     <Box sx={{ flexGrow: 1 }} />
      //       <h1 >EBTea</h1>
      //   </Toolbar>
      // </AppBar>
    <Box className="Footer">
      <Grid container className="Entire-Footer">
        <Grid item className="individual-Title">
          <h1 className="Titles">Support</h1>
        </Grid>
        <Grid item className="individual-Title">
          <h1 className="Titles">EBTea</h1>
        </Grid>
        <Grid item className="individual-Title">
          <h1 className="Titles">About</h1>
        </Grid>
      </Grid>
    </Box>
    // </React.Fragment>
  );
}
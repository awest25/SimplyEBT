import React from "react";
import AppWrapper from "../components/AppWrapper";
import CalendarInfo from "../components/CalendarInfo";
import MealDetails from "../components/MealDetails";
import { Grid } from "@mui/material";

function Dashboard() {
    const [selectedDate, setSelectedDate] = React.useState(0);
    console.log(selectedDate)
    return (
        <AppWrapper>
            <CalendarInfo updateDate={(col) => setSelectedDate(col)} />
            <Grid container justifyContent="center" sx={{paddingTop: 2}}>
                <MealDetails selectedDate={selectedDate} />
            </Grid>
        </AppWrapper>
    );
}

export default Dashboard;
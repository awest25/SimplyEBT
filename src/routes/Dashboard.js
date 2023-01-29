import React from "react";
import AppWrapper from "../components/AppWrapper";
import CalendarInfo from "../components/CalendarInfo";
import MealDetails from "../components/MealDetails";

function Dashboard(){
    return (
        <AppWrapper>
            <p>Dashboard</p>
            <CalendarInfo/>
            <MealDetails/>
        </AppWrapper>
    );
}

export default Dashboard;
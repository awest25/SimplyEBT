import React from "react";
import AppWrapper from "../components/AppWrapper";
import CalendarInfo from "../components/CalendarInfo";

function Dashboard(){
    return (
        <AppWrapper>
            <p>Dashboard</p>
            <CalendarInfo/>
        </AppWrapper>
    );
}

export default Dashboard;
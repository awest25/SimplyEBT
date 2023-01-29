import React from "react";
import AppWrapper from "../components/AppWrapper";
import CalendarInfo from "../components/CalendarInfo";
import MealDetails from "../components/MealDetails";

function Dashboard(){
    const [selectedDate, setSelectedDate] = React.useState(0);
    console.log(selectedDate)
    return (
        <AppWrapper>
            <p>Dashboard</p>
            <CalendarInfo updateDate={(col) => setSelectedDate(col)}/>
            <MealDetails selectedDate={selectedDate}/>
        </AppWrapper>
    );
}

export default Dashboard;
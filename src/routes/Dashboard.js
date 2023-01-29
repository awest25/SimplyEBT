import React, { useEffect, useState } from "react";
import AppWrapper from "../components/AppWrapper";
import CalendarInfo from "../components/CalendarInfo";
import MealDetails from "../components/MealDetails";
import { Grid } from "@mui/material";
import { ref, get, child, remove, query, orderByChild, equalTo, update } from "firebase/database";
import { db } from "../index.js";
import { TempleBuddhist } from "@mui/icons-material";

function getDateString(date_raw) {
    const dd = String(date_raw.getDate()).padStart(2, '0');
    const mm = String(date_raw.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date_raw.getFullYear();
    const day = date_raw.getDay();
    const dateStr = mm + '-' + dd + '-' + yyyy + '-' + day;
    return dateStr;
}

function getWeek(start) {
    var d = new Date(start);
    var output = [];
    for (let i = 0; i < 7; i++) {
        output.push(getDateString(d));
        d.setDate(d.getDate() + 1); // increment date
    }
    return output;
}

function Dashboard() {
    const today_raw = new Date("2023-01-27"); // testing only
    const todayStr = getDateString(today_raw);
    const todayNum = todayStr.charAt(11); // get day # from today
    var weekStart = new Date(today_raw);
    weekStart.setDate(weekStart.getDate() - todayNum);
    const w = getWeek(weekStart);
    const [week, setWeek] = useState(w);
    const [database, setDatabase] = useState({});

    // const appendDatabase = ({ setDatabase }: Props) => {
    //     useEffect(() => {
    //         setDatabase("updated value");
    //     }, []);
    // };

    // get weekly data
    const [loading, setLoading] = useState(true);
    const firebase = ref(db, "data");
    var temp_database = {};
    useEffect(() => {
        const fetchData = async () => {
            for (let i = 0; i < 7; i++) {
                await get(child(firebase, week[i])).then((snapshot) => {
                    if (snapshot.exists()) {
                        temp_database[week[i]] = snapshot.val();
                    } else {
                        console.log("No data available: " + todayStr);
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }
            setDatabase(temp_database);
            setLoading(false);
        }
        fetchData();
    }, [database]);

    const [selectedDate, setSelectedDate] = React.useState(0);
    console.log(selectedDate)
    console.log(temp_database);
    return (
        <AppWrapper>
            {loading ?  <p>Loading...</p> : <CalendarInfo updateDate={(col) => setSelectedDate(col)} db={database} date={todayStr} week={w} />}
            <Grid container justifyContent="center" sx={{ paddingTop: 2 }}>
                <MealDetails selectedDate={selectedDate} />
            </Grid>
        </AppWrapper>
    );
}

export default Dashboard;
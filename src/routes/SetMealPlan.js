import { React, useState, useEffect } from "react";
import AppWrapper from "../components/AppWrapper";
import { TextField, Box, Tabs, Tab, Typography, Button, Stack } from "@mui/material";
import PropTypes from 'prop-types';
import "../styles/SetMealPlan.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { db } from "../index.js";
import { ref, get, child, remove, query, orderByChild, equalTo, update } from "firebase/database";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function getDateString(date_raw) {
    const dd = String(date_raw.getDate()).padStart(2, '0');
    const mm = String(date_raw.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date_raw.getFullYear();
    const day = date_raw.getDay();
    const dateStr = mm + '-' + dd + '-' + yyyy + '-' + day;
    return dateStr;
}

function getWeek(start) {
    var d = new Date (start);
    var output = [];
    // console.log(d);
    for (let i = 0; i<6; i++) {
        output.push(getDateString(d));
        d.setDate(d.getDate() + 1); // increment date
    }
    return output;
}

function SetMealPlan() {
    // tabs
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => { setValue(newValue); };
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Wednesday", "Friday", "Saturday"];
    const indexes = [0, 1, 2, 3, 4, 5, 6];

    // COMMENTED FOR TESTING PURPOSES
    // const today_raw = new Date();
    const today_raw = new Date("2023-01-27"); // testing only
    const todayStr = getDateString(today_raw);
    console.log(todayStr);

    // get weekly data
    const firebase = ref(db, "data");
    const [weekData, setWeekData] = useState({});
    useEffect(() => {
        get(child(firebase, todayStr)).then((snapshot) => {
            if (snapshot.exists()) {
                const todayNum = todayStr.charAt(11); // get day # from today
                var weekStart = new Date (today_raw);
                weekStart.setDate(weekStart.getDate() - todayNum);
                var weekEnd = new Date (weekStart);
                weekEnd.setDate(weekEnd.getDate() + 6);

                const week = getWeek(weekStart, weekEnd);
                // console.log(weekStart);
                // console.log(weekEnd);
                console.log(week);
            } else {
                console.log("No data available: " + todayStr);
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [firebase, todayStr, today_raw]);


    const tabPanels = indexes.map((i) =>
        <TabPanel value={value} index={i}>
            <h2>{days[i]}</h2>
            <Stack spacing={2}>
                <TextField
                    id={"meal-name-" + i}
                    label="Meal Name"
                />
                <TextField
                    id={"ingredients-" + i}
                    label="Ingredients"
                    multiline
                    rows={5}
                />
                <Box>
                    {i !== 6 ?
                        <Button variant="outlined" onClick={() => { setValue(i + 1) }}>Continue<KeyboardArrowRightIcon /></Button> :
                        <Button variant="contained">Submit</Button>
                    }
                </Box>

            </Stack>
        </TabPanel>
    );

    const tabs = indexes.map((i) =>
        <Tab label={days[i]} {...a11yProps(i)} />
    );

    return (
        <AppWrapper>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    {tabs}
                </Tabs>
            </Box>
            {tabPanels}
        </AppWrapper>
    )
}

export default SetMealPlan
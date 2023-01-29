import React from "react";
import AppWrapper from "../components/AppWrapper";
import { TextField, Box, Tabs, Tab, Typography, Button, Stack } from "@mui/material";
import PropTypes from 'prop-types';
import "../styles/SetMealPlan.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { db } from "../index.js";
import { ref, push, update, getDatabase } from "firebase/database";

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

function SetMealPlan() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => { setValue(newValue); };
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Wednesday", "Friday", "Saturday"];
    const indexes = [0, 1, 2, 3, 4, 5, 6];

    // get today's date
    const today_raw = new Date();
    const dd = String(today_raw.getDate()).padStart(2, '0');
    const mm = String(today_raw.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today_raw.getFullYear();
    const day = today_raw.getDay();
    const today = mm + '-' + dd + '-' + yyyy + '-' + day;
    console.log(today);

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
                    {i != 6 ?
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
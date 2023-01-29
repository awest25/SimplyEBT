import React from "react";
import AppWrapper from "../components/AppWrapper";
import { Grid, TextField, Box, Tabs, Tab, Typography, Button } from "@mui/material";
import PropTypes from 'prop-types';
import "../styles/SetMealPlan.css"

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

function Form(props) {
    return (
        <Grid container spacing={3}>
            <Grid item>
                <TextField
                    id={"meal-name-" + props.index}
                    label="Meal Name"
                />
            </Grid>
            <Grid item>
                <TextField
                    id={"ingredients-" + props.index}
                    label="Ingredients"
                    multiline
                    rows={5}
                />
            </Grid>
        </Grid>
    );
}

function SetMealPlan() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => { setValue(newValue); };
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Wednesday", "Friday", "Saturday"];
    const indexes = [0, 1, 2, 3, 4, 5, 6];

    const tabPanels = indexes.map((i) =>
        <TabPanel value={value} index={i}>
            <h2>{days[i]}</h2>
            <Form />
            {i != 6 ? 
                <Button variant="contained">Continue</Button> :
                <Button variant="contained">Submit</Button>}
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
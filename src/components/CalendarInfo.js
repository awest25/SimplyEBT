import React, { useState } from 'react';
import SimpleTable from './Table.js';
import { Grid, Chip } from '@material-ui/core';

export default function CalendarInfo(props) {
    const balance = 280;
    const weeklyBudget = 70;
    const [inputVisible, setInputVisible] = useState(false);
    // const [inputValue, setInputValue] = useState('');
    // const [groceryTotal, setGroceryTotal] = useState(0);
    return (
        <div>
            <Grid container>
                <Grid item xs={8}>
                    <h1>Balance: $ <Chip label={String(balance)}/></h1>
                    <h2>{'Weekly Budget: $' + String(weeklyBudget)}</h2>
                </Grid>
                {/* <Grid item xs={4}>
                    {/* <Button variant="contained" color="primary" onClick={() => {
                        setInputVisible(!inputVisible);
                        setInputValue('');
                        // setTableValue(inputValue);
                    }}>
                        {'Enter Grocery Total'}
                    </Button> */}
                    {/* {inputVisible &&
                        <>
                            <TextField label="Input field" margin="normal" fullWidth onChange={(event) => setInputValue(event.target.value)} />
                            <Button label="Submit" variant="contained" color="primary" onClick={(event) => { event.preventDefault(); setGroceryTotal(inputValue); }}>Submit</Button></>
                    } */}
                {/* </Grid> */}
            </Grid>
            <SimpleTable tableValue={11} updateDate={(col) => props.updateDate(col)} />
        </div>
    );
}
import React, { useState } from 'react';
import SimpleTable from './Table.js';
import { Grid, Button, TextField } from '@material-ui/core';

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
                    <h1>{'EBT Balance: $' + String(balance)}</h1>
                    <h2>{'Weekly Budget: $' + String(weeklyBudget)}</h2>
                </Grid>
            </Grid>
            <SimpleTable tableValue={11} updateDate={(col) => props.updateDate(col)} db={props.db} date={props.date} week={props.week} />
        </div>
    );
}
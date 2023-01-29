import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const temp_foods = ['Burger', 'Pizza', 'Rice', 'Salad', 'Sandwich', 'Soup', 'Taco']
  const temp_spending = [10, 20, 30, 40, 50, 60, props.tableValue];

  return (
    <Table className={classes.root}>
      <TableHead>
        <TableRow>
          {Array(7).fill(null).map((_, col) => (
            <TableCell key={col} onClick={() => props.updateDate(col)}>{days[col]}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
         {temp_foods.map((food, index) => {
            return <TableCell key={index}>{food}</TableCell>
         })}
         </TableRow>
      <TableRow>
         {temp_spending.map((spending, index) => {
            return <TableCell key={index + spending}>{spending}</TableCell>
         })}
         </TableRow>
      </TableBody>
    </Table>
    
  );
}

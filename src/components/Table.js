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

export default function SimpleTable() {
  const classes = useStyles();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const temp_spending = [10, 20, 30, 40, 50, 60, 70];

  return (
    <Table className={classes.root}>
      <TableHead>
        <TableRow>
          <TableCell>Day</TableCell>
          {Array(7).fill(null).map((_, col) => (
            <TableCell key={col}>{days[col]}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array(2).fill(null).map((_, row) => (
          <TableRow key={row}>
            <TableCell>{row + 1}</TableCell>
            {Array(7).fill(null).map((_, col) => (
              <TableCell key={col}>{`\$ ${temp_spending[col]}`}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

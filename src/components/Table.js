import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "../styles/Table.css";
import { red } from '@mui/material/colors';

export default function SimpleTable(props) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const temp_foods = ['Burger', 'Pizza', 'Rice', 'Salad', 'Sandwich', 'Soup', 'Taco']
  const temp_spending = [10, 20, 30, 40, 50, 60, 70];
  const [selected, setSelected] = useState(0);
  console.log(selected)

  function handleClick(index) {
    setSelected(index);
    props.updateDate(index);
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          {Array(7).fill(null).map((_, col) => (
            <TableCell 
            className={col == selected ? "selected" : "tableHead"}
            key={col} 
            onClick={() => handleClick(col)}>{days[col]}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className="Middle">
         {temp_foods.map((food, index) => {
            return <TableCell className="tableCell" key={index}>{food}</TableCell>
         })}
        </TableRow>
        <TableRow className="bottom">
         {temp_spending.map((spending, index) => {
            return <TableCell className="tableCell" key={index + spending}>{"$"+spending}</TableCell>
         })}
         </TableRow>
      </TableBody>
    </Table>
  );
}

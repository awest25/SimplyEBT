import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "../styles/Table.css";
import { red } from '@mui/material/colors';

const useStyles = makeStyles({
  head: {
    color: red,
  },
  root: {
    width: '100%',
  },
});

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

export default function SimpleTable(props) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const temp_foods = ['Burger', 'Pizza', 'Rice', 'Salad', 'Sandwich', 'Soup', 'Taco']
  const temp_spending = [10, 20, 30, 40, 50, 60, 70];
  const database = props.db;
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
            return <TableCell key={index}>{database[props.week[index]]["meal_name"]}</TableCell>
         })}
        </TableRow>
        <TableRow className="bottom">
         {temp_spending.map((spending, index) => {
            return <TableCell key={index + spending}>${(database[props.week[index]]["cost"] == undefined) ? 0 : database[props.week[index]]["cost"]}</TableCell>
         })}
         </TableRow>
      </TableBody>
    </Table>
  );
}

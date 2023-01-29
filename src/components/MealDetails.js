import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import "../styles/MealDetails.css";
import { red } from '@mui/material/colors';
import { Button, TextField } from '@material-ui/core';

function MealDetails(props) {
  const dates = ["01-22-2023-0", "01-23-2023-1", "01-24-2023-2", "01-25-2023-3", "01-26-2023-4", "01-27-2023-5", "01-28-2023-6"];
  const mealData = {
    "01-22-2023-0": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal_name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal_name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal_name": "Caprese Sandwich"
      }
    },
    "01-23-2023-1": {
      "breakfast": {
        "ingr": "FUCK ME Eggo waffles, syrup",
        "meal_name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal_name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal_name": "Caprese Sandwich"
      }
    },
    "01-24-2023-2": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal_name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal_name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal_name": "Caprese Sandwich"
      }
    },
    "01-25-2023-3": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal_name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal_name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal_name": "Caprese Sandwich"
      }
    },
    "01-26-2023-4": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal_name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal_name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal_name": "Caprese Sandwich"
      }
    },
    "01-27-2023-5": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal_name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal_name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal_name": "Caprese Sandwich"
      }
    },
    "01-28-2023-6": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal_name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal_name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal_name": "Caprese Sandwich"
      }
    }
  };
  const [inputValue, setInputValue] = useState('');
  const [groceryTotal, setGroceryTotal] = useState(0);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <Grid className="Overall-Box" sx={{ flexGrow: 1 }}>
      <Grid container item className="Text-Icon" xs={7} direction="row">
        <h1 className="style">
          {days[props.selectedDate]} Details  <ModeEditOutlineIcon sx={{cusor:"pointer"}} className="icon" variant="outlined" onClick={() => window.location.href = "/set-meal-plan"}></ModeEditOutlineIcon></h1>
        <Grid item className="Text-Only">
          <h3>Breakfast</h3>
          <p>{mealData[dates[props.selectedDate]].breakfast.meal_name}</p>
          <ul>
            <li>{mealData[dates[props.selectedDate]].breakfast.ingr}</li>
          </ul>
          <h3>Lunch</h3>
          <p>{mealData[dates[props.selectedDate]].lunch.meal_name}</p>
          <ul>
            <li>{mealData[dates[props.selectedDate]].lunch.ingr}</li>
          </ul>
          <h3>Dinner</h3>
          <p>{mealData[dates[props.selectedDate]].dinner.meal_name}</p>
          <ul>
            <li>{mealData[dates[props.selectedDate]].dinner.ingr}</li>
          </ul>
          <Grid container direction="column" alignItems="center">
            <TextField label="Money Spent" margin="normal" fullWidth onChange={(event) => setInputValue(event.target.value)} />
            <Button label="Submit" variant="contained" color="primary" onClick={(event) => { event.preventDefault(); setGroceryTotal(inputValue); }}>Submit</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MealDetails;
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import "../styles/MealDetails.css";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function MealDetails(props) {
  const dates = ["01-22-2023-0", "01-23-2023-1", "01-24-2023-2", "01-25-2023-3", "01-26-2023-4", "01-27-2023-5", "01-28-2023-6"];
  const mealData = {
    "01-22-2023-0": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-23-2023-1": {
      "breakfast": {
        "ingr": "FUCK ME Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-24-2023-2": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-25-2023-3": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-26-2023-4": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-27-2023-5": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-28-2023-6": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    }
  };

  return (
    <Grid container spacing={10}>

      <Grid item sx={{border:1}}>
        <Grid item sx={{border:1}}>
          <h1 className="style">Meal Details</h1>
          <Button variant="outlined">Edit</Button>
        </Grid>
        <h2>Breakfast</h2>
        <p>{mealData[dates[props.selectedDate]].breakfast.ingr}</p>
        <h3>Lunch</h3>
        <p>{mealData[dates[props.selectedDate]].lunch.ingr}</p>
        <h4>Dinner</h4>
        <p>{mealData[dates[props.selectedDate]].dinner.ingr}</p>
      </Grid>

      <Grid item>
        <Button variant="outlined">Edit</Button>
      </Grid>

    </Grid>
  );
}

export default MealDetails;
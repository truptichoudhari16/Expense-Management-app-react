import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core"; // Importing necessary components from Material UI
import { Doughnut } from "react-chartjs-2"; // Importing Doughnut component from react-chartjs-2

import useStyles from "./styles";
import useTransactions from "../../useTransactions"; // Importing custom hook useTransactions

// Functional component DetailsCard
const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title); // Using custom hook useTransactions to get total and chartData
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      {/* r displaying title and subheader */}
      <CardHeader title={title} subheader={subheader} />
      {/*  displaying total amount */}
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        {/* Doughnut chart displaying chartData */}
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard; // Exporting the DetailsCard component as default

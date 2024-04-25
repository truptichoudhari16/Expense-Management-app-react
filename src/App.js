import React, { useRef } from "react";
import { Grid } from "@material-ui/core"; // Importing Grid component from Material UI

import { Details, Main } from "./components";
import useStyles from "./styles";

// Functional component App
const App = () => {
  const classes = useStyles();

  const main = useRef(null); // Creating a ref for the main component

  return (
    <div>
      {/* Grid container for layout using Material UI */}
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        {/* Details component for Income (mobile view) */}
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        {/* Main component (with ref) */}
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        {/* Details component for Income (desktop view) */}
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        {/* Details component for Expense */}
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

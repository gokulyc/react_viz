// import logo from "./logo.svg";
// import "../src/wdyr";
import "./App.css";
import { useCallback, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import MainDrawer from "./layouts/MainDrawer";

//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    header: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: "white",
        backgroundColor: "#0a5075",
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.header}>
                    <MainDrawer />
                    
                </Paper>

                {/* <Paper className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Item One" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                        </Tabs>
                    </Paper> */}
            </Grid>
        </div>
    );
}

export default App;

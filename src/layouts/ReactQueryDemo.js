// import logo from "./logo.svg";
// import "../src/wdyr";
import { useCallback, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel, { a11yProps } from "../UI/Tabpanel";

// import MainDrawer from "../layouts/MainDrawer";
import ReactQueryDemo from "../components/ReactQueryDemo/ReactQueryDemo";
import ReactQueryDemo2 from "../components/ReactQueryDemo/ReactQueryDemo2";
import App from "../App";

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
        padding: theme.spacing(2),
        textAlign: "center",
        color: "white",
        backgroundColor: "#0a5075",
    },
}));

function ReactQueryLayout() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <App />
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="simple tabs example"
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Tab label="React Query" {...a11yProps(0)} />
                            <Tab label="React Query 2" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
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

                <TabPanel value={value} index={0}>
                    <Grid container spacing={3}>
                        <ReactQueryDemo />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={3}>
                        <ReactQueryDemo2 />
                    </Grid>
                </TabPanel>
            </Grid>
        </div>
    );
}

export default ReactQueryLayout;

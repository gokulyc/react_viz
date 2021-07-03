// import logo from "./logo.svg";
// import "../src/wdyr";
import "./App.css";
import { useCallback, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel,{a11yProps} from "./UI/Tabpanel";

import Charts1 from "./components/Charts1";
import TabViszUI2 from "./components/Plotlyjs1";
import TabViszUI3 from "./components/Plotlyjs2";
import TabViszUI4 from "./components/Plotlyjs3pie";
import TabViszUI5 from "./components/Plotlyjs4line";
import ReactQueryDemo from "./components/ReactQueryDemo/ReactQueryDemo"
import ReactQueryDemo2 from "./components/ReactQueryDemo/ReactQueryDemo2"



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
        padding: theme.spacing(2),
        textAlign: "center",
        color: "white",
        backgroundColor: "#0a5075",
    },
}));



function App() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.header}>
                        Visualizations using D3 Based Libraries
                    </Paper>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="simple tabs example"
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Tab label="Recharts" {...a11yProps(0)} />
                            <Tab label="Scatter Plots" {...a11yProps(1)} />
                            <Tab label="Bar Charts" {...a11yProps(2)} />
                            <Tab label="PIE Charts" {...a11yProps(3)} />
                            <Tab label="Line Charts" {...a11yProps(4)} />
                            <Tab label="React Query" {...a11yProps(5)} />
                            <Tab label="React Query 2" {...a11yProps(6)} />

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
                        <Charts1 />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={3}>
                        <TabViszUI2 />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={3}>
                        <TabViszUI3 />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container spacing={3}>
                        <TabViszUI4 />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid container spacing={3}>
                        <TabViszUI5 />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Grid container spacing={3}>
                        <ReactQueryDemo />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Grid container spacing={3}>
                        <ReactQueryDemo2 />
                    </Grid>
                </TabPanel>
            </Grid>
        </div>
    );
}

export default App;

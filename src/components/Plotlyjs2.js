import { useCallback,  Fragment } from "react";

import createPlotlyComponent from "react-plotly.js/factory";

// import Plot from 'react-plotly.js';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { barplot6, barplot7, barplot8,barplot9,barplot10,barplot11,barplot12,barplot13 } from "../PlotlyConsts/1Bar";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.primary,
    },
}));

function Charts1() {
    const classes = useStyles();
    // const [data, changeData] = useState();

    const renderQuickChart = useCallback(() => {
        return (
            <Plot
                data={[
                    {
                        x: ["giraffes", "orangutans", "monkeys"],
                        y: [20, 14, 23],
                        type: "bar",
                    },
                    { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{ width: "75%", height: "75%", title: "A Fancy Plot" }}
            />
        );
    }, []);

    const renderChart2 = useCallback(
        () => (
            <Plot
                data={[
                    {
                        x: ["giraffes", "orangutans", "monkeys"],
                        y: [20, 14, 23],
                        name: "SF Zoo",
                        type: "bar",
                    },
                    {
                        x: ["giraffes", "orangutans", "monkeys"],
                        y: [20, 14, 23],
                        name: "SF Zoo",
                        type: "bar",
                    },
                ]}
                layout={{
                    width: "75%",
                    height: "75%",
                    barmode: "group",
                    title: "A Fancy Plot",
                }}
            />
        ),
        []
    );
    const renderChart3 = useCallback(
        () => (
            <Plot
                data={[
                    {
                        x: ["giraffes", "orangutans", "monkeys"],
                        y: [20, 14, 23],
                        name: "SF Zoo",
                        type: "bar",
                    },
                    {
                        x: ["giraffes", "orangutans", "monkeys"],
                        y: [12, 18, 29],
                        name: "LA Zoo",
                        type: "bar",
                    },
                ]}
                layout={{
                    width: "75%",
                    height: "75%",
                    barmode: "stack",
                    title: "A Fancy Plot",
                }}
            />
        ),
        []
    );

    const renderChart4 = useCallback(
        () => (
            <Plot
                data={[
                    {
                        x: [
                            "Liam",
                            "Sophie",
                            "Jacob",
                            "Mia",
                            "William",
                            "Olivia",
                        ],
                        y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
                        type: "bar",
                        text: [
                            "4.17 below the mean",
                            "4.17 below the mean",
                            "0.17 below the mean",
                            "0.17 below the mean",
                            "0.83 above the mean",
                            "7.83 above the mean",
                        ],
                        marker: {
                            color: "rgb(0,124,195)",
                        },
                    },
                ]}
                layout={{
                    width: "75%",
                    height: "75%",
                    barmode: "stack",
                    title: "Number of Graphs Made this Week",
                    font: {
                        family: "Raleway, sans-serif",
                    },
                    showlegend: false,
                    xaxis: {
                        tickangle: -45,
                    },
                    yaxis: {
                        zeroline: false,
                        gridwidth: 2,
                    },
                    bargap: 0.05,
                }}
            />
        ),
        []
    );

    const renderChart5 = useCallback(() => {
        const xValue = ["Product A", "Product B", "Product C"];

        const yValue = [20, 14, 23];
        return (
            <Plot
                data={[
                    {
                        x: xValue,
                        y: yValue,
                        type: "bar",
                        text: yValue.map(String),
                        textposition: "auto",
                        hoverinfo: "none",
                        marker: {
                            color: "rgb(158,202,225)",
                            opacity: 0.6,
                            line: {
                                color: "rgb(8,48,107)",
                                width: 1.5,
                            },
                        },
                    },
                ]}
                layout={{
                    width: "75%",
                    height: "75%",
                    barmode: "stack",
                    title: "January 2013 Sales Report",
                }}
            />
        );
    }, []);

    const renderChart6 = useCallback(() => {
        const pobj = barplot6();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);

    const renderChart7 = useCallback(() => {
        const pobj = barplot7();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);

    const renderChart8 = useCallback(() => {
        const pobj = barplot8();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);

    const renderChart9 = useCallback(() => {
        const pobj = barplot9();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);

    const renderChart10 = useCallback(() => {
        const pobj = barplot10();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);

    const renderChart11 = useCallback(() => {
        const pobj = barplot11();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);

    const renderChart12 = useCallback(() => {
        const pobj = barplot12();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);

    const renderChart13 = useCallback(() => {
        const pobj = barplot13();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);


    return (
        <Fragment>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS -> 1  Basic Bar Chart"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderQuickChart()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 2 Grouped Bar Chart"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart2()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 3 Stacked Bar Chart"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart3()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 4 Bar Chart with Hover Text"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart4()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 5 Bar Chart with Direct Labels"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart5()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 6 Grouped Bar Chart with Direct Labels"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart6()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 7 Bar Chart with Rotated Labels"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart7()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 8 Customizing Individual Bar Colors"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart8()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 9 Customizing Individual Bar Widths"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart9()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 10 Customizing Individual Bar Base"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart10()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 11 Colored and Styled Bar Chart"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart11()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 12 Waterfall Bar Chart"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart12()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"Demo -> 13 Bar Chart with Relative Barmode"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart13()}
                </Paper>
            </Grid>
        </Fragment>
    );
}

export default Charts1;

import { useCallback,  Fragment } from "react";

import createPlotlyComponent from "react-plotly.js/factory";

// import Plot from 'react-plotly.js';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    // const [data, changeData] = useState([
    //     { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    //     { name: "Page B", uv: 500, pv: 2400, amt: 2400 },
    //     { name: "Page C", uv: 300, pv: 2400, amt: 2400 },
    //     { name: "Page D", uv: 900, pv: 2400, amt: 2400 },
    // ]);
    // const CustomTooltip = useCallback(
    //     ({ payload, label, active }) => {
    //         if (active) {
    //             return (
    //                 <div className="custom-tooltip">
    //                     <p className="label">{`${label} : ${payload[0].value}`}</p>
    //                     <p className="intro">{label}</p>
    //                     <p className="desc">
    //                         Anything you want can be displayed here.
    //                     </p>
    //                 </div>
    //             );
    //         }

    //         return null;
    //     },
    //     [data]
    // );

    const renderQuickChart = useCallback(() => {
        return (
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: "scatter",
                        mode: "lines+markers",
                        marker: { color: "red" },
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
                        x: [1, 2, 3, 4],
                        y: [10, 15, 13, 17],
                        mode: "markers",
                        type: "scatter",
                    },
                    {
                        x: [2, 3, 4, 5],
                        y: [16, 5, 11, 9],
                        mode: "lines",
                        type: "scatter",
                    },
                    {
                        x: [1, 2, 3, 4],
                        y: [12, 9, 15, 12],
                        mode: "lines+markers",
                        type: "scatter",
                    },
                ]}
                layout={{ width: "75%", height: "75%", title: "A Fancy Plot" }}
            />
        ),
        []
    );
    const renderChart3 = useCallback(
        () => (
            <Plot
                data={[
                    {
                        x: [1, 2, 3, 4, 5],
                        y: [1, 6, 3, 6, 1],
                        mode: "markers",
                        type: "scatter",
                        name: "Team A",
                        text: ["A-1", "A-2", "A-3", "A-4", "A-5"],
                        marker: { size: 12 },
                    },
                    {
                        x: [1.5, 2.5, 3.5, 4.5, 5.5],
                        y: [4, 1, 7, 1, 4],
                        mode: "markers",
                        type: "scatter",
                        name: "Team B",
                        text: ["B-a", "B-b", "B-c", "B-d", "B-e"],
                        marker: { size: 12 },
                    },
                ]}
                layout={{
                    width: "75%",
                    height: "75%",
                    xaxis: {
                        range: [0.75, 5.25],
                    },
                    yaxis: {
                        range: [0, 8],
                    },
                    title: "A Fancy Plot",
                }}
            />
        ),
        []
    );
    return (
        <Fragment>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{"PlotlyJS -> 1"}</Paper>
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
                <Paper className={classes.paper}>{"Demo -> 2"}</Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart2()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{"Demo -> 3"}</Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderChart3()}
                </Paper>
            </Grid>
        </Fragment>
    );
}

export default Charts1;

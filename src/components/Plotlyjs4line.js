import { useCallback, Fragment } from "react";

import createPlotlyComponent from "react-plotly.js/factory";

// import Plot from 'react-plotly.js';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { line1, line2, line3, line4, line5, line6, /*line7*/ } from "../PlotlyConsts/3line";

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

    const renderLine1 = useCallback(() => {
        const pobj = line1();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderLine2 = useCallback(() => {
        const pobj = line2();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderLine3 = useCallback(() => {
        const pobj = line3();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderLine4 = useCallback(() => {
        const pobj = line4();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderLine5 = useCallback(() => {
        const pobj = line5();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderLine6 = useCallback(() => {
        const pobj = line6();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    // const renderLine7 = useCallback(() => {
    //     const pobj = line7();
    //     return <Plot data={pobj.data} layout={pobj.layout} />;
    // }, []);

    return (
        <Fragment>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 1 ->  Basic Line Plot"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderLine1()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 2 -> Line and Scatter Plot"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderLine2()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 3 -> Adding Names to Line and Scatter Plot"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderLine3()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 4 -> Line and Scatter Styling"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderLine4()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 5 -> Styling Line Plot"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderLine5()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 6 -> Colored and Styled Scatter Plot"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderLine6()}
                </Paper>
            </Grid>
            {/* <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 7 -> Colored and Styled Scatter Plot"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderLine7()}
                </Paper>
            </Grid> */}
        </Fragment>
    );
}

export default Charts1;

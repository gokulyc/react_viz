import { useCallback, Fragment } from "react";

import createPlotlyComponent from "react-plotly.js/factory";

// import Plot from 'react-plotly.js';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { pie1, pie2, pie3,pie4,pie5 } from "../PlotlyConsts/2Pie";

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

    const renderPie1 = useCallback(() => {
        const pobj = pie1();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderPie2 = useCallback(() => {
        const pobj = pie2();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderPie3 = useCallback(() => {
        const pobj = pie3();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderPie4 = useCallback(() => {
        const pobj = pie4();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);
    const renderPie5 = useCallback(() => {
        const pobj = pie5();
        return <Plot data={pobj.data} layout={pobj.layout} />;
    }, []);




    return (
        <Fragment>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 1 ->  Basic Pie Chart"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderPie1()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 2 ->  Pie Chart Subplotst"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderPie2()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 3 ->  Donut Chart"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderPie3()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 4 ->  Automatically Adjust Margins"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderPie4()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {"PlotlyJS 5 ->  Control Text Orientation Inside Pie Chart Sectors"}
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderPie5()}
                </Paper>
            </Grid>
        </Fragment>
    );
}

export default Charts1;

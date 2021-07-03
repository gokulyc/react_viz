import { useCallback, useState, Fragment } from "react";
import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip,
    Bar,
    BarChart,
    Legend,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    const [data, changeData] = useState([
        { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
        { name: "Page B", uv: 500, pv: 2400, amt: 2400 },
        { name: "Page C", uv: 300, pv: 2400, amt: 2400 },
        { name: "Page D", uv: 900, pv: 2400, amt: 2400 },
    ]);
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

    const renderLineChart = useCallback(() => {
        return (
            <LineChart
                width={600}
                height={350}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                {/* <Tooltip content={<CustomTooltip />}/> */}
                <Tooltip />
                <Legend
                    width={100}
                    wrapperStyle={{
                        top: 20,
                        left: 150,
                        backgroundColor: "#f5f5f5",
                        border: "1px solid #d5d5d5",
                        borderRadius: 10,
                        lineHeight: "40px",
                    }}
                />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </LineChart>
        );
    });

    const renderBarChart = useCallback(() => (
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            <Legend
                width={100}
                wrapperStyle={{
                    top: 20,
                    left: 150,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "40px",
                }}
            />
        </BarChart>
    ));
    return (
        <Fragment>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{"Recharts -> 1"}</Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper
                    className={classes.paper}
                    elevation={10}
                    variant="elevation"
                >
                    {renderLineChart()}
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{"Recharts -> 2"}</Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper className={classes.paper} elevation={10}>
                    {renderBarChart()}
                </Paper>
            </Grid>
        </Fragment>
    );
}

export default Charts1;

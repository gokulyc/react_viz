// Basic Line Plot
const line1 = () => {
    const data = [
        {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: "scatter",
        },
        {
            x: [1, 2, 3, 4],
            y: [16, 5, 11, 9],
            type: "scatter",
        },
    ];

    // const layout = {
    //     height: 400,
    //     width: 500,
    // };

    return { data, layout: null };
};

// Line and Scatter Plot
const line2 = () => {
    const data = [
        {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: "markers",
            name: "markers",
        },
        {
            x: [2, 3, 4, 5],
            y: [16, 5, 11, 9],
            mode: "lines",
            name: "lines",
        },
        {
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: "lines+markers",
            name: "lines+markers",
        },
    ];

    const layout = {
        title: "Line and Scatter Plot",
    };

    return { data, layout: null };
};

// Adding Names to Line and Scatter Plot
const line3 = () => {
    const data = [
        {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: "markers",
            name: "Scatter",
        },
        {
            x: [2, 3, 4, 5],
            y: [16, 5, 11, 9],
            mode: "lines",
            name: "Lines",
        },
        {
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: "lines+markers",
            name: "Scatter + Lines",
        },
    ];

    const layout = {
        title: "Adding Names to Line and Scatter Plot",
    };

    return { data, layout: null };
};

// Line and Scatter Styling
const line4 = () => {
    const data = [
        {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: "markers",
            marker: {
                color: "rgb(219, 64, 82)",
                size: 12,
            },
        },
        {
            x: [2, 3, 4, 5],
            y: [16, 5, 11, 9],
            mode: "lines",
            line: {
                color: "rgb(55, 128, 191)",
                width: 3,
            },
        },
        {
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: "lines+markers",
            marker: {
                color: "rgb(128, 0, 128)",
                size: 8,
            },
            line: {
                color: "rgb(128, 0, 128)",
                width: 1,
            },
        },
    ];

    const layout = {
        title: "Line and Scatter Styling",
    };

    return { data, layout: null };
};

// Styling Line Plot
const line5 = () => {
    const data = [
        {
            type: "scatter",
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: "lines",
            name: "Red",
            line: {
                color: "rgb(219, 64, 82)",
                width: 3,
            },
        },
        {
            type: "scatter",
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: "lines",
            name: "Blue",
            line: {
                color: "rgb(55, 128, 191)",
                width: 1,
            },
        },
    ];

    const layout = {
        title: " Styling Line Plot",
        width: 700,
        height: 500,
    };

    return { data, layout: null };
};

// Colored and Styled Scatter Plot
const line6 = () => {
    const data = [
        {
            x: [52698, 43117],
            y: [53, 31],
            mode: "markers",
            name: "North America",
            text: ["United States", "Canada"],
            marker: {
                color: "rgb(164, 194, 244)",
                size: 12,
                line: {
                    color: "white",
                    width: 0.5,
                },
            },
            type: "scatter",
        },
        {
            x: [39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007],
            y: [33, 20, 13, 19, 27, 19, 49, 44, 38],
            mode: "markers",
            name: "Europe",
            text: [
                "Germany",
                "Britain",
                "France",
                "Spain",
                "Italy",
                "Czech Rep.",
                "Greece",
                "Poland",
            ],
            marker: {
                color: "rgb(255, 217, 102)",
                size: 12,
            },
            type: "scatter",
        },
        {
            x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
            y: [23, 42, 54, 89, 14, 99, 93, 70],
            mode: "markers",
            name: "Asia/Pacific",
            text: [
                "Australia",
                "Japan",
                "South Korea",
                "Malaysia",
                "China",
                "Indonesia",
                "Philippines",
                "India",
            ],
            marker: {
                color: "rgb(234, 153, 153)",
                size: 12,
            },
            type: "scatter",
        },
        {
            x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
            y: [43, 47, 56, 80, 86, 93, 80],
            mode: "markers",
            name: "Latin America",
            text: [
                "Chile",
                "Argentina",
                "Mexico",
                "Venezuela",
                "Venezuela",
                "El Salvador",
                "Bolivia",
            ],
            marker: {
                color: "rgb(142, 124, 195)",
                size: 12,
            },
            type: "scatter",
        },
    ];

    const layout = {
        title: "Quarter 1 Growth",
        xaxis: {
            title: "GDP per Capita",
            showgrid: false,
            zeroline: false,
        },
        yaxis: {
            title: "Percent",
            showline: false,
        },
    };

    return { data, layout: null };
};
// const line7= null;

export { line1, line2, line3, line4, line5, line6 /*line7*/ };

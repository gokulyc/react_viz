// Basic Pie Chart
const pie1 = () => {
    const data = [
        {
            values: [19, 26, 55],
            labels: ["Residential", "Non-Residential", "Utility"],
            type: "pie",
        },
    ];

    const layout = {
        height: 400,
        width: 500,
    };

    return { data, layout };
};

// Pie Chart Subplots
const pie2 = () => {
    const allLabels = ["1st", "2nd", "3rd", "4th", "5th"];

    const allValues = [
        [38, 27, 18, 10, 7],
        [28, 26, 21, 15, 10],
        [38, 19, 16, 14, 13],
        [31, 24, 19, 18, 8],
    ];

    const ultimateColors = [
        [
            "rgb(56, 75, 126)",
            "rgb(18, 36, 37)",
            "rgb(34, 53, 101)",
            "rgb(36, 55, 57)",
            "rgb(6, 4, 4)",
        ],
        [
            "rgb(177, 127, 38)",
            "rgb(205, 152, 36)",
            "rgb(99, 79, 37)",
            "rgb(129, 180, 179)",
            "rgb(124, 103, 37)",
        ],
        [
            "rgb(33, 75, 99)",
            "rgb(79, 129, 102)",
            "rgb(151, 179, 100)",
            "rgb(175, 49, 35)",
            "rgb(36, 73, 147)",
        ],
        [
            "rgb(146, 123, 21)",
            "rgb(177, 180, 34)",
            "rgb(206, 206, 40)",
            "rgb(175, 51, 21)",
            "rgb(35, 36, 21)",
        ],
    ];

    const data = [
        {
            values: allValues[0],
            labels: allLabels,
            type: "pie",
            name: "Starry Night",
            marker: {
                colors: ultimateColors[0],
            },
            domain: {
                row: 0,
                column: 0,
            },
            hoverinfo: "label+percent+name",
            textinfo: "none",
        },
        {
            values: allValues[1],
            labels: allLabels,
            type: "pie",
            name: "Sunflowers",
            marker: {
                colors: ultimateColors[1],
            },
            domain: {
                row: 1,
                column: 0,
            },
            hoverinfo: "label+percent+name",
            textinfo: "none",
        },
        {
            values: allValues[2],
            labels: allLabels,
            type: "pie",
            name: "Irises",
            marker: {
                colors: ultimateColors[2],
            },
            domain: {
                row: 0,
                column: 1,
            },
            hoverinfo: "label+percent+name",
            textinfo: "none",
        },
        {
            values: allValues[3],
            labels: allLabels,
            type: "pie",
            name: "The Night Cafe",
            marker: {
                colors: ultimateColors[3],
            },
            domain: {
                x: [0.52, 1],
                y: [0, 0.48],
            },
            hoverinfo: "label+percent+name",
            textinfo: "none",
        },
    ];

    const layout = {
        // height: 400,
        // width: 500,
        grid: { rows: 2, columns: 2 },
    };
    return { data, layout };
};
// Donut Chart
const pie3 = () => {
    const data = [
        {
            values: [16, 15, 12, 6, 5, 4, 42],
            labels: [
                "US",
                "China",
                "European Union",
                "Russian Federation",
                "Brazil",
                "India",
                "Rest of World",
            ],
            domain: { column: 0 },
            name: "GHG Emissions",
            hoverinfo: "label+percent+name",
            hole: 0.4,
            type: "pie",
        },
        {
            values: [27, 11, 25, 8, 1, 3, 25],
            labels: [
                "US",
                "China",
                "European Union",
                "Russian Federation",
                "Brazil",
                "India",
                "Rest of World",
            ],
            text: "CO2",
            textposition: "inside",
            domain: { column: 1 },
            name: "CO2 Emissions",
            hoverinfo: "label+percent+name",
            hole: 0.4,
            type: "pie",
        },
    ];

    const layout = {
        title: "Global Emissions 1990-2011",
        annotations: [
            {
                font: {
                    size: 20,
                },
                showarrow: false,
                text: "GHG",
                x: 0.17,
                y: 0.5,
            },
            {
                font: {
                    size: 20,
                },
                showarrow: false,
                text: "CO2",
                x: 0.82,
                y: 0.5,
            },
        ],
        height: 400,
        width: 600,
        showlegend: false,
        grid: { rows: 1, columns: 2 },
    };

    return { data, layout };
};

// Automatically Adjust Margins
const pie4 = () => {
    const data = [
        {
            type: "pie",
            values: [2, 3, 4, 4],
            labels: [
                "Wages",
                "Operating expenses",
                "Cost of sales",
                "Insurance",
            ],
            textinfo: "label+percent",
            textposition: "outside",
            automargin: true,
        },
    ];

    const layout = {
        height: 400,
        width: 400,
        margin: { t: 0, b: 0, l: 0, r: 0 },
        showlegend: false,
    };
    return { data, layout };
};

// Control Text Orientation Inside Pie Chart Sectors
const pie5 = () => {
    const data = [
        {
            type: "pie",
            values: [2, 3, 4, 4],
            labels: [
                "Wages",
                "Operating expenses",
                "Cost of sales",
                "Insurance",
            ],
            textinfo: "label+percent",
            insidetextorientation: "radial",
        },
    ];

    const layout = [
        {
            height: 700,
            width: 700,
        },
    ];

    return { data, layout };
};

export { pie1, pie2, pie3, pie4, pie5 };

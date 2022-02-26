import React from "react";
import Chart from "react-apexcharts";

//heatmap
const heatmapSeries = [
    {
        name: 'Metric1',
        data: 18
    },
    {
        name: 'Metric2',
        data: 22
    },
    {
        name: 'Metric3',
        data: 15
    },
    {
        name: 'Metric4',
        data: 25
    },
    {
        name: 'Metric5',
        data: 78
    },
    {
        name: 'Metric6',
        data: 56
    },
    {
        name: 'Metric7',
        data: 95
    },
    {
        name: 'Metric8',
        data: 66
    },
    {
        name: 'Metric9',
        data: 74
    }
];

const HeatmapChart = props => {
    const { donutData } = props;
    return (
        <Chart
            options={{
                chart: {
                    height: 350,
                    type: 'heatmap',
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#008FFB"],
                title: {
                    text: 'HeatMap Chart (Single color)'
                },
            }}
            height={400}
            series={heatmapSeries}
            type="heatmap"
        />
    );
};

export default HeatmapChart;
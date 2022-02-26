import React from "react";
import Chart from "react-apexcharts";

const BarChart = (props) => {
    return (
        <Chart
            options={{
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            }}
            height={400}
            series={[{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }]}
            type="bar"
        />
    );
};

export default BarChart;
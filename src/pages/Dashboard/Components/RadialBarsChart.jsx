import React from "react";
import Chart from "react-apexcharts";

const RadialBarsChart = (props) => {
    return (
        <Chart
            options={{
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    return 249
                                }
                            }
                        }
                    }
                }
            }}
            height={400}
            series={[44, 55, 67, 83]}
            type="radialBar"
        />
    );
};

export default RadialBarsChart;
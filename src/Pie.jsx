import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";

export function Pie() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [0,10,5,20,15,30]
      }
    ]
  });
  const [pie, setPie] = useState({
    options: {},
    series: [55, 30, 15],
    labels: ['A', 'B', 'C']
  });
  return (
    <div className="chartdata">
      <div className="chart1">
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="800" />
      </div>
      <div className="chart">
        <Chart options={pie.options} series={pie.series} type="donut" width="600" />

      </div>


    </div>
  );
}

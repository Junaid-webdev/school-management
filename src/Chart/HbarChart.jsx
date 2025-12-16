import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Category", "Users..."],
  ["India", 120],
  ["Russia ", 150],
  ["Australia ", 90],
  ["Canada ", 200],
  ["USA", 170],
];

const options = {
  title: "User Perfomance",
  chartArea: { width: "60%" },
  hAxis: {
    title: "Number of users",
    minValue: 0,
  },
  vAxis: {
    title: "Country",
  },
  colors: ["rgb(53,138,148)"], 
};

function HbarChart() {
  return (
    <Chart
      chartType="BarChart"   
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
}

export default HbarChart;

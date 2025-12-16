import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  colors: [
    "rgb(53,138,148)",
    "rgb(40,34,70)",
    "#f39f2a",
    "#188310",
  ],
  legend: { position: "bottom" },
};

function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}

export default PieChart;

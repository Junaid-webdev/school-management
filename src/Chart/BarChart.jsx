import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

const options = {
  title: "Company Performance",
  colors: ["rgb(53,138,148)", "rgb(37,11,65)"],
  legend: { position: "bottom" },
};

function BarChart() {
  return (
    <Chart
      chartType="ColumnChart"   
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default BarChart;

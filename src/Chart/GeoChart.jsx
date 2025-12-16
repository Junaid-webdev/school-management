import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Country", "Users"],
  ["India", 300],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 150],
  ["Russia", 500],
  ["Australia", 250],
];

const options = {
  colorAxis: {
    colors: ["#b2ebf2", "#006064"], 
  },
  backgroundColor: "#f5f5f5",
  datalessRegionColor: "#e0e0e0",
  defaultColor: "#f5f5f5",
};

function GeoChart() {
  return (
    <div style={{ height:"1900px" }}>
    <Chart
      chartType="GeoChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
      
    />
    </div>
  );
}

export default GeoChart;

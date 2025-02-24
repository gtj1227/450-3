import React from "react";
import * as d3 from "d3";

const Child1 = ({ data }) => {
  const width = 500, height = 300, margin = { top: 20, right: 30, bottom: 40, left: 50 };

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => parseFloat(d.total_bill))]).range([margin.left, width - margin.right]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => parseFloat(d.tip))]).range([height - margin.bottom, margin.top]);

  return (
    <div>
      <h2 style = {{ paddingLeft: "150px"}}>Total Bill vs Tips</h2>
      <svg width={width} height={height}>
       
        <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} stroke="black" />
        <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} stroke="black" />

        <text x={width / 2} y={height} textAnchor="middle">Total Bill</text>
        <text x={10} y={170} transform="rotate(-90,10,150)" textAnchor="middle">Tips</text>

        {data.map((d, i) => (
          <circle key={i} cx={xScale(parseFloat(d.total_bill))} cy={yScale(parseFloat(d.tip))} r={4} fill="#69b3a2" />
        ))}
      </svg>
    </div>
  );
};

export default Child1;
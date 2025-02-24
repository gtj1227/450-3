import * as d3 from "d3";
import { XAxis, YAxis, BarChart, Bar } from "recharts";

const Child2 = ({ data }) => {
  const avgTipsByDay = d3.rollup(
    data,
    (v) => d3.mean(v, (d) => parseFloat(d.tip)),
    (d) => d.day
  );

  const chartData = Array.from(avgTipsByDay, ([day, avg_tip]) => ({ day, avg_tip }));

  return (
    <div>
      <h2 style = {{ paddingLeft: "150px"}}>Average Tip by Day</h2>
      <BarChart width={500} height={300} data={chartData}>
        <XAxis dataKey="day" />
        <YAxis />
        <Bar dataKey="avg_tip" fill="#69b3a2" />
        <text x={25} y={165} transform="rotate(-90,10,150)" textAnchor="middle">Tips</text>
        <text x={250} y={300} textAnchor="middle">Day</text>
      </BarChart>
    </div>
  );
};

export default Child2;
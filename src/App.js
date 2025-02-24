import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import tipsData from "./tips.csv";
import Child1 from "./Child1.js";
import Child2 from "./Child2.js";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(tipsData, {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  }, []);

  return (
    <div>
      <Child1 data={data} />
      <Child2 data={data} />
    </div>
  );
};

export default App;

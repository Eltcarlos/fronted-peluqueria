import { Pie } from "react-chartjs-2";

import React from "react";

const PieChart = ({ data }) => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

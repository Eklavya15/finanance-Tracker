import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = ({ data }) => {
  const labels = data.map((d) => d.category);
  const values = data.map((d) => d.total);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Expenses by Category",
        data: values,
        backgroundColor: [
          "#4F46E5",
          "#22C55E",
          "#F97316",
          "#EF4444",
          "#0EA5E9",
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default CategoryPieChart;

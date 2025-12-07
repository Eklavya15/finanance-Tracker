import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const MonthlyLineChart = ({ data }) => {
  const labels = data.map((d) =>
    new Date(d.month).toLocaleDateString(undefined, {
      month: "short",
      year: "2-digit",
    })
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Income",
        data: data.map((d) => d.income),
        borderColor: "#22C55E",
      },
      {
        label: "Expense",
        data: data.map((d) => d.expense),
        borderColor: "#EF4444",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default MonthlyLineChart;

import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const IncomeExpenseBarChart = ({ summary }) => {
  const chartData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [summary.income, summary.expense],
        backgroundColor: ["#22C55E", "#EF4444"],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default IncomeExpenseBarChart;

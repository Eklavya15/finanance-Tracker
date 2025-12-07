import React from "react";
import CategoryPieChart from "./CategoryPieChart";
import MonthlyLineChart from "./MonthlyLineChart";
import IncomeExpenseBarChart from "./IncomeExpenseBarChart";

const AnalyticsDashboard = ({ monthly, categories }) => {
  const totalIncome = monthly.reduce((s, m) => s + m.income, 0);
  const totalExpense = monthly.reduce((s, m) => s + m.expense, 0);

  const summary = { income: totalIncome, expense: totalExpense };

  return (
    <div style={{ padding: 16 }}>
      <h2>Analytics</h2>
      <p>
        Total Income: {totalIncome} | Total Expense: {totalExpense}
      </p>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        <div style={{ width: 350 }}>
          <h3>Monthly Trends</h3>
          <MonthlyLineChart data={monthly} />
        </div>
        <div style={{ width: 350 }}>
          <h3>Income vs Expense</h3>
          <IncomeExpenseBarChart summary={summary} />
        </div>
        <div style={{ width: 350 }}>
          <h3>Category Breakdown</h3>
          <CategoryPieChart data={categories} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

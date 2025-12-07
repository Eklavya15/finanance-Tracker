import React, { Suspense, lazy, useEffect, useState } from "react";
import analyticsApi from "../api/analyticsApi";

const AnalyticsDashboard = lazy(() =>
  import("../components/dashboard/AnalyticsDashboard")
);

const DashboardPage = () => {
  const [monthly, setMonthly] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    analyticsApi.overview().then(setMonthly);
    analyticsApi.byCategory().then(setCategories);
  }, []);

  return (
    <div className="page">
      <div className="card">
        <Suspense fallback={<div>Loading dashboard...</div>}>
          <AnalyticsDashboard monthly={monthly} categories={categories} />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardPage;

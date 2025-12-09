# Finance Tracker

A full-stack personal finance tracker application with:

- **Backend:** Node.js + Express + MongoDB  
- **Frontend:** React + Chart.js  
- **Deployed frontend:**  https://finanancetracker.vercel.app/login

Users can register, log in, add income/expense transactions, and view detailed analytics (monthly trends + category-wise spending).

---

## Repository Structure

```bash
finanance-Tracker/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── analyticsController.js
│   │   ├── authController.js
│   │   ├── transactionController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── rateLimit.js
│   │   └── roleMiddleware.js
│   │
│   ├── models/
│   │   ├── transactionModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── analyticsRoutes.js
│   │   ├── authRoutes.js
│   │   ├── transactionRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── utils/
│   │   └── jwt.js
│   │
│   ├── redis.js
│   ├── index.js
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    │
    └── src/
        ├── api/
        │   ├── analyticsApi.js
        │   ├── authApi.js
        │   ├── axiosClient.js
        │   └── transactionApi.js
        │
        ├── components/
        │   ├── auth/
        │   │   ├── LoginForm.js
        │   │   └── RegisterForm.js
        │   │
        │   ├── dashboard/
        │   │   ├── AnalyticsDashboard.js
        │   │   ├── CategoryPieChart.js
        │   │   ├── IncomeExpenseBarChart.js
        │   │   └── MonthlyLineChart.js
        │   │
        │   ├── layout/
        │   │   ├── Navbar.js
        │   │   └── ProtectedRoute.js
        │   │
        │   └── transactions/
        │       ├── TransactionForm.js
        │       └── TransactionList.js
        │
        ├── context/
        │   ├── AuthContext.js
        │   └── ThemeContext.js
        │
        ├── hooks/
        │   ├── useAuth.js
        │   └── useTransactions.js
        │
        ├── pages/
        │   ├── DashboardPage.js
        │   ├── LoginPage.js
        │   ├── RegisterPage.js
        │   └── TransactionsPage.js
        │
        ├── App.js
        ├── App.css
        ├── App.test.js
        ├── index.js
        ├── index.css
        ├── logo.svg
        ├── reportWebVitals.js
        └── setupTests.js

# Finance Tracker

A full-stack personal finance tracker application with:

- **Backend:** Node.js + Express + MongoDB  
- **Frontend:** React + Chart.js  
- **Deployed frontend:** https://finanancetracker.vercel.app  

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
Tech Stack
Backend

Node.js, Express

MongoDB + Mongoose

JSON Web Tokens (JWT)

bcrypt

express-rate-limit

helmet, cors

dotenv

Frontend

React (CRA)

React Router

Context API (Auth + Theme)

Axios

chart.js + react-chartjs-2

Testing Library + Jest

Backend Features

JWT-based authentication

Register + login endpoints

Password hashing

Role-based access control (admin, user, read-only)

read-only users cannot create transactions

Transactions with pagination

Analytics:

Monthly income vs expense

Category-wise totals

Rate limiting:

Auth: 5 requests / 15 min

Transactions: 100 / hour

Analytics: 50 / hour

Health check endpoint: /api/health

Security layers (CORS, Helmet)

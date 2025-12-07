import React from "react";
import useTransactions from "../hooks/useTransactions";
import TransactionForm from "../components/transactions/TransactionForm";
import TransactionList from "../components/transactions/TransactionList";

const TransactionsPage = () => {
  const { items, page, setPage, totals, reload, setItems } = useTransactions();

  const handleCreated = (tx) => {
    setItems((prev) => [tx, ...prev]);
    reload();
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Transactions</h2>
      <p>
        Income: {totals.income} | Expense: {totals.expense} | Net: {totals.net}
      </p>
      <TransactionForm onCreated={handleCreated} />
      <TransactionList items={items} page={page} setPage={setPage} />
    </div>
  );
};

export default TransactionsPage;

import React, { useCallback, useContext, useState } from "react";
import transactionApi from "../../api/transactionApi";
import { AuthContext } from "../../context/AuthContext";

const TransactionForm = ({ onCreated }) => {
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "Food",
    date: "",
    note: "",
  });

  const { user } = useContext(AuthContext);
  const isReadOnly = user?.role === "read-only";

  const change = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const submit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isReadOnly) return;
      const payload = {
        ...form,
        amount: Number(form.amount),
      };
      const created = await transactionApi.create(payload);
      onCreated(created);
      setForm((prev) => ({ ...prev, amount: "", note: "" }));
    },
    [form, isReadOnly, onCreated]
  );

  return (
    <form onSubmit={submit}>
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={change}
        disabled={isReadOnly}
      />
      <select
        name="type"
        value={form.type}
        onChange={change}
        disabled={isReadOnly}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select
        name="category"
        value={form.category}
        onChange={change}
        disabled={isReadOnly}
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Entertainment</option>
        <option>Shopping</option>
        <option>Others</option>
      </select>
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={change}
        disabled={isReadOnly}
      />
      <input
        name="note"
        placeholder="Note"
        value={form.note}
        onChange={change}
        disabled={isReadOnly}
      />
      <button type="submit" disabled={isReadOnly}>
        Add
      </button>
      {isReadOnly && <span> Read‑only users cannot add transactions.</span>}
    </form>
  );
};

export default TransactionForm;

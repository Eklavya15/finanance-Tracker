import { useCallback, useEffect, useMemo, useState } from "react";
import transactionApi from "../api/transactionApi";

const useTransactions = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const data = await transactionApi.list(page, 20);
    setItems(data);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    load();
  }, [load]);

  const totals = useMemo(() => {
    let income = 0;
    let expense = 0;
    items.forEach((t) => {
      if (t.type === "income") income += t.amount;
      else expense += t.amount;
    });
    return { income, expense, net: income - expense };
  }, [items]);

  return { page, setPage, items, loading, totals, reload: load, setItems };
};

export default useTransactions;

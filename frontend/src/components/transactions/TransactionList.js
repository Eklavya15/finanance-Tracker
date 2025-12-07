import React from "react";

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "4px 0",
  borderBottom: "1px solid #eee",
};

const TransactionList = ({ items, page, setPage }) => {
  return (
    <div>
      <div
        style={{
          maxHeight: 400,
          overflowY: "auto",
        }}
      >
        {items.map((t) => (
          <div key={t.id} style={rowStyle}>
            <span>{new Date(t.date).toLocaleDateString()}</span>
            <span>{t.category}</span>
            <span>{t.type}</span>
            <span>{t.amount}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8 }}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span style={{ margin: "0 8px" }}>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default TransactionList;

import React from "react";

function Stock({ name, ticker, price, onStockClick }) {
  return (
    <div className="card" onClick={() => onStockClick?.(name, ticker, price)}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{`${ticker}: $${price}`}</p>
      </div>
    </div>
  );
}

export default Stock;
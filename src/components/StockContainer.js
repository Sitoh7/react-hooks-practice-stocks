import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({ tomain,stockData }) {
  

  return (
    <div>
      <h2>Stocks</h2>
      {stockData.map(data => (
        <Stock
          key={data.id}
          name={data.name}
          ticker={data.ticker}
          price={data.price}
          onStockClick={tomain}
        />
      ))}
    </div>
  );
}

export default StockContainer; 
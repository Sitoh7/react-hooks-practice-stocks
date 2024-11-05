import React,{useEffect,useState} from "react";
import Stock from "./Stock";

function StockContainer({tomain}) {
  const[stockData,setStockData]= useState([])

  useEffect(()=>{
    fetch(`http://localhost:3001/stocks`)
    .then(resp=>resp.json())
    .then(data=> setStockData(data))
  },[])

 
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stockData.map(data=><Stock key={data.id} name={data.name} ticker={data.ticker} price={data.price} tomain={tomain} />)}
    </div>
  );
}

export default StockContainer;

import React, { useState,useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolio, setPortfolio] = useState([]);

  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then(resp => resp.json())
      .then(data => setStockData(data));
  }, []);


  function tomain(name, ticker, price) {
    setPortfolio(prevPortfolio => [
      ...prevPortfolio,
      {
        name,
        price,
        ticker,
        id: Date.now() // Add unique id for key prop
      }
    ]);
  }

 function delstock(name,){
const deletedportfolio = portfolio.filter((data)=>{ return data.name !== name})
     setPortfolio(deletedportfolio)
     }

function sortStock(sort){
  let processedData = [...stockData];
  console.log(sort)
  
  if(sort == "A"){
    processedData.sort((a, b) => a.name.localeCompare(b.name))
  }
  if(sort == "P"){
    processedData.sort((a, b) => a.price - b.price)
  }

  setStockData(processedData)

}
function handleFilter(e){
  console.log(e)
  //let processedData = [...stockData];
  let processedData= stockData.filter((data)=>{return data.type == e})
  setStockData(processedData)
  
}


  return (
    <div>
      <SearchBar sortStock={sortStock} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer tomain={tomain} stockData={stockData} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} delstock={delstock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
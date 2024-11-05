import React,{useState} from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio = [],delstock }) {

  const [myPortfolio,setMyPortfolio] = useState(portfolio)


  // function delstock(name,ticker,price){
  //   console.log(name)
  //   // const deletedportfolio = portfolio.filter((data)=>data.nameame !== name)
    
  // }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(stock => (
        <Stock
          key={stock.id}
          name={stock.name}
          price={stock.price}
          ticker={stock.ticker}
          onStockClick={delstock}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;

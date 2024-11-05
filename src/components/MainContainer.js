import React,{useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [portfolio,setPortfolio] = useState([])

  function tomain(name,ticker,price){
    console.log(name)
     const newarr = [...portfolio,{
      name:name,
      price:price,
      ticker:ticker
    }]
    setPortfolio(newarr)
  

  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer tomain={tomain}/>
        </div>
        <div className="col-4">
          <PortfolioContainer data={portfolio}/>
          {/* {portfolio.map((data,index)=><PortfolioContainer  key={index} name={data.name} price={data.price} ticker={data.ticker}/>)} */}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

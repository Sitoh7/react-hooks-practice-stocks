import React,{useState,useEffect} from "react";
import Stock from "./Stock";

function PortfolioContainer(data) {

  const[fix,setfix] = useState([data])
  
   
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      
      {fix.map((data,index)=><Stock key={index} name={data.name} price={data.price} ticker={data.ticker} />)}
    </div>
  );
}

export default PortfolioContainer;

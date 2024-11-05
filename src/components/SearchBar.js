import React,{useState,useEffect} from "react";

function SearchBar({sortStock,handleFilter}) {

  const[sortPrice,setSortPrice] = useState(false)
  const[sortalpha,setSortAplha] = useState(false)
  const [filter,setFilter] = useState("")


  useEffect(()=>{
    
if(sortPrice){
  sortStock("P")
}
if(sortalpha){
  sortStock("A")
}



  },[sortPrice,sortalpha])







  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          defaultChecked={sortalpha}
          name="sort"
          value={sortalpha}
          
          onClick={()=>setSortAplha(!sortalpha)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          defaultChecked={sortPrice}
          
          onClick={()=>setSortPrice(!sortPrice)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=>handleFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";




import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import { useEffect, useState } from "react";

const List = ({ rows, currency ,searchText}) => {
const [val , setVal] = useState();
const [selectedOrder , setSelectedOrder] = useState(undefined);  
console.log(selectedOrder); 
  useEffect(()=>{
    let arr = rows.filter((curr )=>{
      return  searchText === curr["&id"]
    });
    console.log(typeof(searchText));
    console.log(searchText.length);

    searchText.length === 0 ?  setVal(rows) :setVal(arr); 
  
         console.log(arr);
    
    
  },[searchText,selectedOrder])
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>

        {val && val.map((row , index) => 
          {
            console.log(row)
return (
  <ListRow key={index} setSelectedOrder={setSelectedOrder} index={index}>
  <ListRowCell>{row["&id"]}</ListRowCell>
  <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
  <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
  <ListRowCell>{row.orderSubmitted}</ListRowCell>
  <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
</ListRow>
)
          }
      
        )}
      </tbody>
    </table>
  );
};

export default List;

import {useState} from "react";

const UseOrder = () => {
  const [hookOrders, setOrder] = useState([])
  return {hookOrders, setOrder}
}


export default UseOrder;
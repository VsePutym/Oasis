import {useState} from "react";

const UseOrders = () => {
  const [hookOrders, setHookOrders] = useState([]);
  return {hookOrders, setHookOrders}
}

export default UseOrders;
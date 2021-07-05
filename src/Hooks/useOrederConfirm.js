import {useState} from "react";

const useOrderConfirm = () => {
  const [hookOpenOrderConfirm, setOpenOrderConfirm] = useState(false);
  return{hookOpenOrderConfirm, setOpenOrderConfirm}
}

export default useOrderConfirm;
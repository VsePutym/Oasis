import {useState} from "react";


export const UseOpenItem = () => {
  const [ hookOpenItem, setOpenItem ] = useState(null);
  return {hookOpenItem, setOpenItem};
}


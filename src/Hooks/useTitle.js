import {useEffect} from "react";

 const useTitle = (hookOpenItem) => {

 useEffect(() => {
   document.title = hookOpenItem ? hookOpenItem.name : "Oasis"
  }, [hookOpenItem])
}

export default useTitle;
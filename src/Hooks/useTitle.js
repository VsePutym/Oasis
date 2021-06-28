import {useEffect} from "react";

 const useTitle = (getOpenItem) => {

   const checkModal = () =>{
     if(!getOpenItem.hookOpenItem){
       document.title = 'React app'
     } else {
       document.title = getOpenItem.hookOpenItem.name
     }
   }

 useEffect(() => {
   checkModal()
  }, [getOpenItem])
}

export default useTitle;
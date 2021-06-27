import {useState} from "react";

const UseChoices = () => {
  const [hookChoice, setChoice] = useState();

  const changeChoice = e => {
     setChoice(e.target.value)
  }
  return {hookChoice, changeChoice}
}

export default UseChoices;
import {useState} from "react";

const UseCount = (stateCount) => {
  const [hookCount, setCount] = useState(stateCount || 1);
  const onChange = e => setCount(e.target.value);
  return {hookCount, setCount, onChange}
}

export default UseCount;
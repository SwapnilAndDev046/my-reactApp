import { useState } from "react";
import "../components/Test.css";
function Test() {
  let [counter, updateCounter] = useState(0);

  return (
    <div>
      <h1>counter value is : {counter}</h1>
    </div>
  );
}
export default Test;

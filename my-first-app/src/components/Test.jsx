import { useState } from "react";
function Test() {
  let [name, updateName] = useState("swapnil");
  return (
    <div>
      <h2>name of the student is: {name}</h2>
      <button onClick={() => updateName("Swapnil devkate")}>Change</button>
    </div>
  );
}
export default Test;

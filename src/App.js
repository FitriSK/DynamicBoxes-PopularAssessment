import { useState } from "react";

function App() {
  const [number, setNumber] = useState();
  const boxes = [];

  let idx = 1;
  for (let i = 1; i <= number; i++) {
    idx = idx * 2;
    let wdx = idx * 2 + "px";
    boxes.push(<div style={{"width": wdx, "height": wdx}} id="box"></div>);
  }

  function handleChange(event) {
    setNumber(event.target.value);
  }

  return (
    <div className="app">
      <h1>Dynamic Boxes</h1>
      <p>It is advisable to enter numbers below not more than 8</p>
      <input onChange={handleChange} />
      <div className="boxArea">{boxes}</div>
    </div>
  );
}

export default App;

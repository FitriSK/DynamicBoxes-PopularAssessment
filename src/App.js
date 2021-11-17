import { useState } from "react";

function App() {
  const [number, setNumber] = useState();
  const boxes = [];

  let idx = 1;
  for (let i = 1; i <= number; i++) {
    idx = idx * 2;
    let wdx = idx * 10 + "px";
    boxes.push(<div style={{"width": wdx, "height": wdx}} id="box"></div>);
  }

  /*
1*1=1 | 2*2=4 | 3*3=9
1*2=2 | 2*2=4 | 3*2=6
1+1=2 | 2+2=4 | 3+3=6
1+2=3 | 2+2=4 | 3+2=5

1*2=2 | 2*2=4 | 4*2=8 | 8*2=16 | 16*2=32
2*2=4 | 4*2=8 | 8*2=16

1 2 4
2 4 8
3 6 12
  */

  function handleChange(event) {
    setNumber(event.target.value);
  }

  return (
    <div className="app">
      <h1>Dynamic Boxes</h1>
      <input onChange={handleChange} />
      <div className="boxArea">{boxes}</div>
    </div>
  );
}

export default App;

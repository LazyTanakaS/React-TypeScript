import { useState } from "react";
import "./App.css";
import Button from "./Button"

function App() {
  const [count, setCount] = useState<number>(0);

  const handleChange = (amount: number) => {
    setCount((prevCount) => prevCount + amount);
  };

  const handleReset = () => setCount(0);

  return (
    <>
      <div className="counter">
        <h1>Counter</h1>
      </div>

      <div className="counter-display">
        <h2>{count}</h2>
      </div>

      <Button label="+5" onClick={() => handleChange(5)} className="btn-plus-5"/>
      <Button label="+1" onClick={() => handleChange(1)} className="btn-plus"/>
      <Button label="Reset" onClick={handleReset} className="btn-reset"/>
      <Button label="-1" onClick={() => handleChange(-1)} className="btn-minus"/>
      <Button label="-5" onClick={() => handleChange(-5)} classNam
      e="btn-minus-5"/>
    </>
  );
}

export default App;
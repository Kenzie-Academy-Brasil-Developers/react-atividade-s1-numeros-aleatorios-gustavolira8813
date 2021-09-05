import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Random from "./components/Random";

function App() {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };
  // const [numberInputMin, setNumberInputMin] = useState(1);
  // const [numberInputMax, setNumberInputMax] = useState(100);
  // // const randomNumber = (numberInputMin, numberInputMax) => {
  // //   setCount(Math.floor(Math.random() * (numberInputMax-numberInputMin)) + numberInputMin
  // // }
  // function randomNumber(numberInputMin, numberInputMax) {
  //   let min = parseInt(numberInputMin);
  //   let max = parseInt(numberInputMax);
  //   let num = Math.floor(Math.random() * (max - min + 1)) + min;
  //   setCount(parseInt(num));
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Random></Random>
      </header>
    </div>
  );
}

export default App;

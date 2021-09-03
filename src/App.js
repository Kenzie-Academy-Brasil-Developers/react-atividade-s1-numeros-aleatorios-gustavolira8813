import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const [numberInputMin, setNumberInputMin] = useState(1);
  const [numberInputMax, setNumberInputMax] = useState(100);
  // const randomNumber = (numberInputMin, numberInputMax) => {
  //   setCount(Math.floor(Math.random() * (numberInputMax-numberInputMin)) + numberInputMin
  // }
  function randomNumber(numberInputMin, numberInputMax) {
    let min = parseInt(numberInputMin);
    let max = parseInt(numberInputMax);
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    setCount(parseInt(num));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Números Aleatórios</h1>
        <button className="add" onClick={increment}>
          ++
        </button>
        <span className="result">{count}</span>
        <button className="sub" onClick={decrement}>
          --
        </button>
        <label>
          Digite os valores que serão os intervalos do número aleatório <br />
          <small>OBS: Por padrão o intervalo é entre 1 e 100</small>
        </label>
        <div>
          <input
            placeholder="Mínimo"
            type="number"
            onChange={(e) => setNumberInputMin(e.target.value)}
          />
          <span>
            <small>...</small>
          </span>
          <input
            placeholder="Máximo"
            type="number"
            onChange={(e) => setNumberInputMax(e.target.value)}
          />
        </div>
        <button
          className="randomButton"
          onClick={() => randomNumber(numberInputMin, numberInputMax)}
        >
          Gerar Número
        </button>
      </header>
    </div>
  );
}

export default App;

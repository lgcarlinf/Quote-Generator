import { useState, useEffect } from "react";
import "./App.css";
import dice from "./assets/icon-dice.svg";
import pattern from "./assets/pattern-divider-desktop.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      });
  }, []);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      });
  };

  return (
    <>
      <div className="App">
        <div className="box-quote">
          <p> ADVICE #{id}</p>
          <h1>{advice}</h1>
          <img className="pattern" src={pattern} alt="" />

          <button
            type="button"
            value="New Quote"
            className="button"
            onClick={getAdvice}
          >
            <img className="dice" src={dice} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

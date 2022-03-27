import { useState, useEffect } from "react";
import "./App.css";
import dice from "./assets/icon-dice.svg";
import axios from "axios";
import pattern from "./assets/pattern-divider-desktop.svg";

function App() {
  const [data, setData] = useState({});
  const getAdvice = async () => {
    try {
      let rand = Math.floor(Math.random() * 220);
      const res = await axios.get(`https://api.adviceslip.com/advice/${rand}`);
      setData(res.data.slip);
      console.log(rand);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <div className="App">
        {data !== {} ? (
          <div className="box-quote">
            <p> ADVICE #{data.id}</p>
            <h1>{data.advice}</h1>
            <img className="pattern" src={pattern} alt="" />
            <button
              type="button"
              aria-label="new quote"
              className="button"
              onClick={getAdvice}
            >
              <img className="dice" src={dice} alt="" />
            </button>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}

export default App;

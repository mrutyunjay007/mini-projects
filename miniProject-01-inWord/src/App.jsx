import { useState, useEffect } from "react";
import inWordConverter from "./util";
import "./App.css";

function App() {
  const [amount, setAmount] = useState();
  const [word, setWord] = useState("");

  useEffect(() => {
    //Debouncing
    let timer;
    if (amount) {
      timer = setTimeout(() => {
        const inWord = inWordConverter(amount);
        setWord(inWord);
      }, 500);
    } else {
      setWord("");
    }
    return () => clearTimeout(timer);
  }, [amount]);

  return (
    <div className="App">
      {/* Main amount taking INPUT */}
      <input
        required
        type="number"
        placeholder="Enter the amount"
        value={amount}
        min={1}
        onChange={(e) => {
          e.preventDefault();
          const currentAmount = e.target.value;
          // amount should be more than zero
          if (currentAmount == 0) {
            e.target.value = null;
            setAmount(e.target.value);
          } else {
            setAmount(e.target.value);
          }
        }}
      />

      {/* if amount start with zero give an error message */}
      {/* or show converted amount in word form */}
      {amount == 0 && amount != null ? (
        <div
          style={{
            color: "red",
            fontFamily: "sans-serif",
            fontSize: "15px",
            opacity: "75%",
          }}
        >
          <span>*amount should be more than zero</span>
        </div>
      ) : (
        <div>
          <span>{word}</span>
        </div>
      )}
    </div>
  );
}

export default App;

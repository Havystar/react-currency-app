import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="currency-app">
      <header className="currency-header">
        <h1>React currency app</h1>
      </header>
      <div className="currency-search">
        <p>Search for a currency</p>
        <form>
          <input
            type="text"
            className="currency-input"
            placeholder="Search"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default App;

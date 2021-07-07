import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Currency from "./Currency";
function App() {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      )
      .then((res) => {
        setCurrencies(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCurrencies = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase())
  );

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
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCurrencies.map((currency) => {
        return (
          <Currency
            key={currency.id}
            name={currency.name}
            price={currency.current_price}
            symbol={currency.symbol}
            image={currency.image}
            volume={currency.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;

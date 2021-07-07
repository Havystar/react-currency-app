import React from "react";

const Currency = ({ name, price, symbol, image, volume }) => {
  return (
    <div className="currency-container">
      <div className="currency-row">
        <div className="currency">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p className="currency-symbol">{symbol}</p>
        </div>
        <div className="currency-data">
          <p className="currency-price">${price}</p>
          <p className="currency-volume">${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Currency;

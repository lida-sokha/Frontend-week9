import React from "react";

export default function OrderCard( {product, price, quantity, onIncrease, onDecrease}) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>Price: ${price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={onDecrease}>-</div>
        <h4>{( quantity)}</h4>
        <div className="order-button" onClick={onIncrease}>+</div>
      </div>
    </div>
  );
}

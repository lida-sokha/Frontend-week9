import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  
  const handleIncrease = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity += 1;
    setOrders(updatedOrders);
  };

  const handleDecrease = (index) => {
    const updatedOrders = [...orders];
    if (updatedOrders[index].quantity > 0) {
      updatedOrders[index].quantity -= 1;
      setOrders(updatedOrders);
    }
  };

  const total = orders.reduce((sum, order)=> sum + (order.price * order.quantity), 0);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order,index) => (
          <OrderCard 
          key={index} 
          product={order.product} 
          price={order.price}
          quantity={order.quantity}
          onIncrease={() => handleIncrease(index)}
          onDecrease={() => handleDecrease(index)}
          />
        ))}
      </div>

      <CheckoutButton total={total.toFixed(2)}></CheckoutButton>
    </>
  );
}

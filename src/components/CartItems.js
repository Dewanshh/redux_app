import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItem=useSelector(state=>state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
      {cartItem.map(item=>(
        <li key={item.id}>{""}<CartItem id={item.id} total={item.totalPrice} quantity={item.quantity} price={item.price} name={item.name} /> {""}</li>
         ))}
      </ul>
    </div>
  );
};

export default CartItems;

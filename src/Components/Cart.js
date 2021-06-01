import { useEffect, useState } from "react";
import "../Cart.css";
import CartItem from "./CartItem";

function Cart({ initialItems }) {
  // load initial (or changed) items from localStorage (in case of browser page reloads manually)
  const initialState = JSON.parse(window.localStorage.getItem('items'));

  const [items, setItems] = useState(initialState || initialItems);

  useEffect(() => {
    // update localStorage to store values of quantity 
    // (that will be set up after manually browser reloading)
    window.localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // update quantity in the parent
  const updateQty = (id, newQty) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, qty: newQty }
      }
        return item;
    });
    setItems(newItems);
  }
  
  const totalAmount = items.reduce((total, item) => (
    total + item.qty * item.price), 0).toFixed(2);

  return (
    <div className="Cart">
      <h1 className="Cart-title">Shopping Cart</h1>
      <div className="Cart-items">
        { items.map(item => (
          <CartItem key={ item.id } updateQty={ updateQty } { ...item } />
        )) }
      </div>
      <h2 className="Cart-total">Total amount: { totalAmount } &euro;</h2>
    </div>
  );
}

export default Cart;
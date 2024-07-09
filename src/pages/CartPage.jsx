import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const val = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(val);
  }, [cart]);
  return (
    <div className="flex gap-4 my-4">
      <div className="w-3/4 flex flex-col gap-4">
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <div className="flex flex-col self-start w-1/4 border-2 border-red-900 rounded-lg p-3">
        <h2 className="text-2xl font-semibold mb-4">Your Cart Summary</h2>
        <h4 className="text-lg font-medium">Total Items: {cart.length}</h4>
        <h4 className="text-lg font-medium">Total Price: {total}</h4>
      </div>
    </div>
  );
};

export default CartPage;

import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center gap-5 w-[90%] bg-red-200 p-3 rounded-lg">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-24 h-20 rounded" />
        <div className="flex flex-col gap-2">
          <h4>
            <b>${item.price}</b>
          </h4>
          <h4>{item.title}</h4>
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="whitespace-nowrap px-4 py-2 bg-red-900 text-white rounded-lg"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;

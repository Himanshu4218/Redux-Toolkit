import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const isFound = cart?.some((item) => item.id === product.id);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center p-4 gap-5 border-2 border-red-900 rounded-lg">
      <div className="flex flex-col gap-1 text-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-[180px] object-contain object-center mb-2"
        />
        <h3 className="text-lg">
          <b>${product.price}</b>
        </h3>
        <h4>{product.title.slice(0, 15)}...</h4>
      </div>
      <button
        onClick={() =>
          !isFound
            ? dispatch(addToCart(product))
            : dispatch(removeFromCart(product.id))
        }
        className="px-4 py-2 bg-red-900 text-white rounded-lg"
      >
        {isFound ? "Remove From Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default Product;

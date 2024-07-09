import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopProducts } from "../redux/slices/productSlice";

const Carousel = () => {
  const [num, setNum] = useState(0);
  const { products, topProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) {
      dispatch(getTopProducts());
    }
  }, [dispatch, products]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum((prev) => {
        if (prev === topProducts.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="relative w-full h-[300px] mb-5">
      <div className="absolute inset-0 bg-red-900 rounded"></div>
      <div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[300px]">
        <div className="h-[250px] w-[250px] bg-white flex justify-center items-center rounded-full overflow-hidden">
          {topProducts.map((prod, index) => {
            if (num === index) {
              return (
                <img
                  key={prod.id}
                  className="w-[200px] h-[200px] bg-white object-contain object-center cursor-pointer"
                  src={prod.image}
                  alt={prod.title}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="flex gap-2 absolute bottom-2 left-1/2 -translate-x-1/2">
        {topProducts.map((_, ind) => {
          return (
            <p
              key={ind}
              className={`${
                ind === num ? "bg-black" : ""
              } w-3 h-3 bg-white rounded-full`}
            ></p>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

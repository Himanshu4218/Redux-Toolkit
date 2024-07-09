import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";
import Loader from "./Loader";

const Products = () => {
  const { products, error, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-4">
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;

import React from "react";
import { products } from "../../data";
import Product from "./Product";
import { productActions, productsReducer } from "../../store/products-slice";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const items = useSelector((state) => state.cart.itemDetail);
  const dispatch = useDispatch();
  const viewProductHandler = (product) => {
    dispatch(productActions.viewProduct(product));
  };
  return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-y-10">
      {products.map((product) => {
        return (
          <Product
            viewProduct={() => viewProductHandler(product)}
            key={product.id}
            item={product}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;

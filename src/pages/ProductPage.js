import React from "react";
import { useParams } from "react-router-dom";
import { productActions } from "../store/products-slice";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "../components/ui/ProductDetails";
import { products } from "../data";

const ProductPage = () => {
  const { productId } = useParams();
  const thisProduct = products.find((product) => product.id == productId);

  // const item = useSelector((state) => state.cart.itemDetail);
  const dispatch = useDispatch();
  const addProductHandler = () => {
    dispatch(
      productActions.addToCart({
        id: thisProduct.id,
        name: thisProduct.name,
        price: thisProduct.price,
        image: thisProduct.image,
        quantity: thisProduct.quantity,
      })
    );
  };

  return (
    <>
      {thisProduct && (
        <ProductDetails item={thisProduct} addProduct={addProductHandler} />
      )}
      {!thisProduct && (
        <h1 className="text-6xl h-[80vh] flex items-center justify-center text-slate-600">
          No Product
        </h1>
      )}
    </>
  );
};

export default ProductPage;

import React from "react";
import { gallery } from "../data";
import FilterProducts from "../components/ui/FilterProducts";
import AllProducts from "../components/ui/AllProducts";
const Products = () => {
  return (
    <section className="min-h-screen py-20">
      <FilterProducts items={gallery} />
      <AllProducts />
    </section>
  );
};

export default Products;

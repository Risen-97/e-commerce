import React from "react";
import { products, gallery } from "../data";
import { Route, Switch } from "react-router-dom";
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

{
  /* <Switch>
  <Route path={`/products:/jewllery`}></Route>
</Switch>; */
}

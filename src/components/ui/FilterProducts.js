import React from "react";
import { NavLink } from "react-router-dom";

const FilterProducts = (props) => {
  return (
    <div>
      <ul className="flex justify-center items-center flex-wrap gap-10 px-10 sm:px-0 font-bold text-slate-600">
        {/* <NavLink>All</NavLink> */}
        {props.items.map((product) => {
          return (
            <h3
              key={product.id}
              className="capitalize cursor-pointer"
              to={`/products/${product.title}`}
            >
              {product.title}
            </h3>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterProducts;

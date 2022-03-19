import React from "react";

const FilterProducts = (props) => {
  return (
    <div>
      <ul className="flex justify-center items-center flex-wrap gap-10 px-10 sm:px-0 font-bold text-slate-600">
        {props.items.map((product) => {
          return (
            <button
              key={product.id}
              className="capitalize cursor-pointer font-bold"
            >
              {product.title}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterProducts;

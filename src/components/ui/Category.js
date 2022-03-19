import React from "react";
import { gallery } from "../../data";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="py-20">
      <h1 className="text-3xl md:text-5xl text-slate-600 text-center mb-20 tracking-[5px] underline underline-offset-[20px] ">
        Category
      </h1>
      <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {gallery.map((category) => {
          return (
            <Link key={category.id} className="h-full" to="/products">
              <article className=" overflow-hidden h-full relative cursor-pointer">
                <h3 className="absolute text-white z-20 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-xl tracking-[10px] uppercase font-bold">
                  {category.title}
                </h3>
                <figure className="h-full group">
                  <div className="w-full h-full z-10 bg-black absolute opacity-50"></div>
                  <img
                    className="h-full group-hover:scale-150 anim object-cover"
                    src={category.image}
                    alt=""
                  />
                </figure>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductDetails = (props) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-20 gap-20  lg:min-h-screen text-slate-800">
      <div className="h-full">
        <img
          src={props.item.image}
          alt=""
          className="h-[500px] lg:h-full w-full object-cover"
        />
      </div>

      <div className="px-8 lg:px-0 text-center sm:text-left">
        <h1 className="text-4xl lg:text-5xl mb-12 underline underline-offset-8">
          {props.item.name}
        </h1>
        <p className="leading-8 mb-12 text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          deleniti nobis voluptatum qui, assumenda commodi sit accusantium
          consequuntur debitis provident magni maiores aliquam nemo,
          reprehenderit optio suscipit in impedit minima voluptas sequi officia
          autem earum magnam fugiat? Quae vero repellendus, nobis voluptatum
          minus nemo facere cumque! Aliquam delectus molestias esse atque.
          Corrupti at pariatur itaque sunt! Fugit veritatis nulla nemo, nesciunt
          nam architecto vitae dolorum omnis culpa excepturi molestias
          dignissimos voluptas accusamus minima, aliquid repellendus officia
          obcaecati repudiandae nobis molestiae labore. Atque debitis fugiat vel
          error. Fugiat, nulla tempora tempore mollitia illo quam, molestias
          quaerat, eius at veritatis quae suscipit?
        </p>

        <span className="text-3xl lg:text-5xl text-slate-700">
          ${props.item.price}
        </span>

        <div className="mt-10 md:mt-20 items-center justify-center lg:justify-start">
          <button
            onClick={props.addProduct}
            className="bg-slate-700 text-white py-2 px-6 rounded-sm text-lg md:text-xl hover:bg-slate-600 transition ease-linear"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

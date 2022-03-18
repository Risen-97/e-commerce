import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartBox = (props) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="grid grid-cols-4 justify-items-center text-xl bg-slate-200 p-4">
        <span className=" justify-self-start col-span-2  w-full">Product</span>
        <span className="">Quantity</span>
        <span className="">Subtotal</span>
      </div>
      <div className="h-[60vh] overflow-y-auto bg-slate-300 p-4">
        {props.items.length > 0 ? (
          props.items.map((item) => {
            return (
              <article
                key={item.id}
                className="border-b-2 border-b-slate-400 py-6 grid grid-cols-4 gap-x-10 md:gap-x-0 justify-items-center items-center"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-5 col-span-2 justify-self-start">
                  <img
                    src={item.image}
                    className="h-32 w-28 object-cover rounded-md"
                    alt=""
                  />
                  <div className="flex flex-col items-start gap-3">
                    <h3 className="hidden sm:block text-xl">{item.name}</h3>
                    <span className="">Price: ${item.price}</span>
                    <button
                      onClick={() => props.removeProduct(item)}
                      className="text-red-500 font-bold"
                    >
                      remove
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-x-4 text-slate-700">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() => props.decreseItem(item.id)}
                    className="bg-slate-700 text-white rounded-full p-1 text-xs md:text-md disabled:bg-gray-400 disabled:text-slate-700 disabled:cursor-not-allowed"
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className=" text-2xl lg:text-3xl">{item.quantity}</span>
                  <button
                    onClick={() => props.increseItem(item.id)}
                    className="bg-slate-700 text-white rounded-full p-1 text-xs md:text-md"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>

                <span className="text-xl md:text-2xl">
                  ${+item.totalPrice.toFixed(2)}
                </span>
              </article>
            );
          })
        ) : (
          <h2 className="text-3xl flex h-full items-center justify-center">
            Cart Is Empty
          </h2>
        )}
      </div>
    </div>
  );
};

export default CartBox;

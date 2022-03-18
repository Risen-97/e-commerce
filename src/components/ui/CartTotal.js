import React from "react";

const CartTotal = (props) => {
  return (
    <aside className="flex justify-center sm:justify-end mt-20 text-slate-600">
      <div className="bg-white p-6  w-[500px] shadow-lg rounded-lg overflow-hidden">
        <div className="text-lg md:text-xl border-b-2 border-b-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-slate-500">Subtotal : </span>
            <span className="">${props.subtotal}</span>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <span className="text-slate-500">Shipping Fee :</span>
            <span className="">- $10</span>
          </div>
        </div>

        <div className="mb-6 text-xl md:text-2xl mt-6 flex items-center justify-between">
          <span className="">Total :</span>
          <span className="">${props.total}</span>
        </div>
        <button className="bg-slate-700 text-white w-full rounded-md py-2 text-md sm:text-xl hover:bg-indigo-100 hover:text-black  transition ease-in">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default CartTotal;

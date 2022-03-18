import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartBox from "../components/ui/CartBox";
import CartTotal from "../components/ui/CartTotal";
import { productActions } from "../store/products-slice";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);

  const removeProductHandler = (product) => {
    dispatch(productActions.removeItem(product));
  };

  const increseItemHandler = (id) =>
    dispatch(productActions.increseQuantity(id));

  const decreseItemHandler = (id) =>
    dispatch(productActions.decreseQuantity(id));

  useEffect(() => {
    const sumItems = items.reduce((a, b) => a + b.totalPrice, 0);
    setSubtotal(+sumItems.toFixed(2));
    console.log(items);
  }, [items]);
  return (
    <section className="min-h-screen py-20 text-slate-700 p-1">
      <h1 className="text-3xl text-center font-bold mb-10">Cart Items</h1>
      <CartBox
        increseItem={increseItemHandler}
        decreseItem={decreseItemHandler}
        items={items}
        removeProduct={removeProductHandler}
      />
      <CartTotal subtotal={subtotal} total={subtotal + 10} />
    </section>
  );
};

export default Cart;

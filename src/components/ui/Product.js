import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <article className="w-[400px] h-[350px] shadow-lg group relative rounded-xl overflow-hidden">
      <Link onClick={props.viewProduct} to={`/products/${props.item.id}`}>
        <figure className="h-[300px] relative">
          <p className="absolute top-2/4 z-20 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 tracking-[2px] bg-slate-700 py-2 px-4 cursor-pointer rounded-md">
            View Details
          </p>
          <div className="bg-black  h-full w-full absolute opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
          <img
            className="h-full w-full object-cover "
            src={props.item.image}
            alt=""
          />
        </figure>
      </Link>

      <div className="flex items-center w-full bg-white  p-4 justify-between">
        <h4>{props.item.name}</h4>
        <span>${props.item.price}</span>
      </div>
    </article>
  );
};

export default Product;

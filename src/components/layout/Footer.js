import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="min-h-[30vh] bg-slate-800 text-white flex flex-col gap-y-10 py-4 sm:flex-row justify-around items-center">
      <div className="">
        <h1 className="text-4xl text-center mb-10">ShopOn</h1>
        <ul className="flex gap-10 text-2xl">
          <li>
            <BsFacebook />
          </li>
          <li>
            <AiFillTwitterCircle />
          </li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <AiFillGithub />
          </li>
        </ul>
      </div>

      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5">
          <li>about us</li>
          <li>terms of use</li>
          <li>dictionary</li>
          <li>privacy policy</li>
          <li>contact us</li>
          <li>about us</li>
          <li>terms of use</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

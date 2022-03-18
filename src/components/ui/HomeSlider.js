import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { hero } from "../../data";

let count = 0;
const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    // startSlider();
    return () =>
      slideRef.current.removeEventListener("animationend", removeAnimation);
  }, []);

  const startSlider = () => {
    setInterval(() => {
      nextImageHandler();
    }, 5000);
  };
  const nextImageHandler = () => {
    count = (count + 1) % hero.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const prevImageHandler = () => {
    count = (count + hero.length - 1) % hero.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative ">
      <div className="absolute tex-3xl md:text-4xl z-40 top-1/2 transform -translate-y-1/2 w-full px-3 text-white flex justify-between items-center">
        <button
          className="bg-white text-slate-800 rounded-full p-2"
          onClick={prevImageHandler}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="bg-white text-slate-800 rounded-full p-2"
          onClick={nextImageHandler}
        >
          <AiOutlineArrowRight />
        </button>
      </div>

      <div className="hidden absolute z-20 bottom-6 left-2/4 transform -translate-x-1/2 md:flex gap-8">
        {hero.map((circle, i) => {
          return (
            <button
              key={i}
              className={`w-6 h-6 rounded-full  ${
                i === currentIndex ? "bg-slate-400" : "bg-white"
              }`}
            ></button>
          );
        })}
      </div>
      <div className="w-full h-full z-10 bg-black absolute opacity-50"></div>
      <div className="aspect-w-16 relative aspect-h-9 w-full">
        <img className="w-full " src={hero[currentIndex].image} alt="" />
      </div>
    </div>
  );
};

export default HomeSlider;

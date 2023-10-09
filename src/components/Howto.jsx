import pineapple from "../images/pineapple.jpg";
import cherry from "../images/cherry.jpg";
import cone from "../images/cone.jpg";
import grapes from "../images/grapes.jpg";
import lemon from "../images/lemon.jpg";
import lime from "../images/lime.jpg";
import strawberry from "../images/straw.jpg";

const Howto = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto w-full bg-[#FFFFFF] dark:bg-[#1C2A34]  text-black p-6 gap-y-8 dark:text-[#D6D6D6]">
      <div className="flex flex-col justify-center items-center mt-12 mb-16 gap-y-6">
        <h1 className="text-[60px] font-bold">How To Section</h1>
        <h4 className="text-[20px] font-semibold">
          Code snippets for HTML, CSS and JavaScript
        </h4>
        <h5 className="text-[16px] font-semibold">
          For example, how to create a slideshow:
        </h5>
      </div>
      <div className="carousel rounded-box w-[80%]">
        <div className="carousel-item">
          <img src={cone} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src={grapes} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src={lemon} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src={lime} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src={pineapple} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src={strawberry} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src={cherry} alt="Burger" />
        </div>
      </div>
      <button className="w-[350px] p-5 rounded-3xl bg-black text-white">
        Learn How To
      </button>
    </div>
  );
};

export default Howto;

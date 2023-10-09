import { FaSearch } from "react-icons/fa";
import Clock from "./Clock";

const Hero = () => {
  return (
    <div className="bg-hero-image w-full h-[510px] flex justify-center items-center ">
      <div className="absolute top-40  right-24">
        <Clock />
      </div>
      <div className="xl:flex lg:hidden sm:hidden xs:hidden">
        <div className="bg-lynx-image w-[12%] h-[27%] absolute right-[200px] bg-cover top-[300px]"></div>
      </div>
      <div className="flex-col justify-center items-center">
        <h1 className="sm:text-[80px] font-bold text-white text-[60px]">
          Learn To Code
        </h1>
        <div className="flex justify-center items-center text-[#FEF5A3] font-bold text-[20px]">
          <h3>With the world&apos;s largest web developer site</h3>
        </div>

        <div className="flex relative">
          <input
            type="text"
            className="w-full h-8 rounded-2xl mt-6 p-6"
            placeholder="Search our tutorials, e.g. HTML"
          />
          <span className="absolute right-3 bottom-4">
            <FaSearch />
          </span>
        </div>
        <div className="flex justify-center items-center mt-12 text-white text-[23px] font-bold underline">
          <a href="" className="hover:text-[#FFF5A2] cursor-pointer">
            Not sure where to begin?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

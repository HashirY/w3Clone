import kaiimg from "../../images/spacesimages/kai.png";

import svg1 from "../../images/spacesimages/boxes.svg";
import svg2 from "../../images/spacesimages/globe.svg";
import svg3 from "../../images/spacesimages/puzzle.svg";
import { BsRobot } from "react-icons/bs";

const Spaces = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center gap-y-8 bg-workspace-img relative">
      <img
        src={kaiimg}
        alt=""
        className="absolute top-0 right-0 w-[20%] h-[30%]"
      />
      <div className="flex flex-col justify-center items-center gap-y-6 mb-10">
        <h1 className="text-[58px] font-bold text-white">
          Create a Free Website
        </h1>
        <p className="text-white text-[22px] font-semibold">
          Code websites directly in the browser with{" "}
          <span className="text-[#FEC0C6]">W3Schools Spaces</span>
        </p>
        <button className="bg-[#05AB6D] p-3 w-[40%] rounded-3xl text-white font-semibold mb-2">
          Get Started for Free
        </button>
        <p className="text-white">No credit card required</p>
      </div>
      <div className="w-full flex items-center justify-around">
        <div className="grid grid-cols-2">
          <img src={svg3} alt="" />
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[#D9EEE1] text-[22px] font-semibold">
              Practice
            </h4>
            <p className="font-bold text-white">Coding Skills</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <BsRobot size={60} color="#D9EEE1" />
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[#D9EEE1] text-[22px] font-semibold">kAI</h4>
            <p className="font-bold text-white">AI Tutor</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <img src={svg1} alt="" />
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[#D9EEE1] text-[22px] font-semibold">Build</h4>
            <p className="font-bold text-white">Websites</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <img src={svg2} alt="" />
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[#D9EEE1] text-[22px] font-semibold">Host</h4>
            <p className="font-bold text-white">Securely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;

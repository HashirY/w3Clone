// import image from "../images/job.png";

import { FaCheckCircle } from "react-icons/fa";

const ProHero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#292A34] h-auto w-full p-10 gap-y-9 text-white dark:bg-[#0C1720]">
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h1 className="text-[65px] font-bold">Become a PRO User</h1>
        <p className="text-[20px] text-[#FEC0C6] font-bold">
          And unlock powerful features:
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-3">
        <p>
          <FaCheckCircle className="h-5 w-5  inline mr-3" />
          <span className="font-bold">Browse W3Schools without ads...</span>
        </p>
        <p>
          <FaCheckCircle className="h-5 w-5  inline mr-3" />
          <span className="font-bold">Website hosting (Includes Spaces)</span>
        </p>
        <p>
          <FaCheckCircle className="h-5 w-5  inline mr-3" />
          <span className="font-bold">Access to our HTML Video Tutorial</span>
        </p>
      </div>
      <button className="bg-[#04AB6C] p-4 w-[300px] font-bold rounded-3xl">
        Learn More
      </button>
    </div>
  );
};

export default ProHero;

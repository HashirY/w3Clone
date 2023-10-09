import {
  FaCrosshairs,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ServicesDropdown = () => {
  return (
    <div className="absolute top-16 left-0 w-full bg-[#292B35] h-auto z-10 p-12">
      <div className="flex justify-between items-center ml-24 mb-12">
        <h1 className="text-[32px] text-[#FEF4A2] font-bold">
          All Our Services
        </h1>
        <input
          type="text"
          placeholder="filter..."
          className="text-white p-2 rounded-3xl"
        />
        <FaCrosshairs />
      </div>
      <div className="flex flex-row items-start justify-start w-[55%] ml-24">
        <h4 className="text-white">
          W3Schools offers a wide range of services and products for beginners
          and professionals, helping millions of people everyday to learn and
          master new skills.
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-x-6 ml-24 mt-10 gap-y-6">
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Free Tutorials</h1>
          <p className="text-white text-[14px] mb-4">
            Enjoy our free tutorials like millions of other internet users since
            1999
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">References</h1>
          <p className="text-white text-[14px] mb-4">
            Explore our selection of references covering all popular coding
            languages
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Create a Website</h1>
          <p className="text-white text-[14px] mb-4">
            Create your own website with <b>W3SchooIs Spaces</b> - no setup
            required
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Exercises</h1>
          <p className="text-white text-[14px] mb-4">
            Enjoy our free tutorials like millions of other internet users since
            1999
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Quizzes</h1>
          <p className="text-white text-[14px] mb-4">
            Explore our selection of references covering all popular coding
            languages
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Get Certified</h1>
          <p className="text-white text-[14px] mb-4">
            Create your own website with <b>W3SchooIs Spaces</b> - no setup
            required
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Log in / Sign Up</h1>
          <p className="text-white text-[14px] mb-4">
            Enjoy our free tutorials like millions of other internet users since
            1999
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">My Learning</h1>
          <p className="text-white text-[14px] mb-4">
            Explore our selection of references covering all popular coding
            languages
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Upgrade</h1>
          <p className="text-white text-[14px] mb-4">
            Create your own website with <b>W3SchooIs Spaces</b> - no setup
            required
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Where To Start</h1>
          <p className="text-white text-[14px] mb-4">
            Enjoy our free tutorials like millions of other internet users since
            1999
          </p>
        </div>

        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">
            Code Editor (Try it)
          </h1>
          <p className="text-white text-[14px] mb-4">
            Explore our selection of references covering all popular coding
            languages
          </p>
        </div>
        <div className="w-[100%] bg-[#3E414B] h-auto rounded-md flex flex-col items-start justify-center p-3 gap-y-6">
          <h1 className="text-[#FEF4A2] font-bold text-lg">Bootcamps</h1>
          <p className="text-white text-[14px] mb-4">
            Create your own website with <b>W3SchooIs Spaces</b> - no setup
            required
          </p>
        </div>
      </div>

      <div className="ml-24 mt-32 flex gap-x-8 items-center">
        <FaFacebook className="text-[28px] text-white hover:text-[#1774EB] cursor-pointer" />
        <FaInstagram className="text-[28px] text-white hover:text-[#A535A1] cursor-pointer" />
        <FaDiscord className="text-[28px] text-white hover:text-[#5562EA] cursor-pointer" />
        <FaLinkedin className="text-[28px] text-white hover:text-[#0172AF] cursor-pointer" />
      </div>
    </div>
  );
};

export default ServicesDropdown;

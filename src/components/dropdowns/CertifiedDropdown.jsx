import { FaCrosshairs } from "react-icons/fa";
import {
  backendCertified,
  dataexercises,
  htmlcsscertified,
  jscertified,
  programs,
} from "../../constants";

const CertfiedDropdown = () => {
  return (
    <div className="absolute top-16 left-0 w-full bg-[#292B35] h-auto z-10 p-12">
      <div className="flex justify-between items-center ml-24 mb-12">
        <h1 className="text-[32px] text-[#FEF4A2] font-bold">Get Certified</h1>
        <input
          type="text"
          placeholder="filter..."
          className="text-white p-2 rounded-3xl"
        />
        <FaCrosshairs />
      </div>
      <div className="grid grid-cols-3 gap-x-12 ml-24">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[24px] text-[#FEF4A2]">HTML and CSS</h1>

          <div className="flex flex-col gap-y-3 ">
            {htmlcsscertified.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.certificate ? "Certificate" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.course ? "Course" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.bootcamp ? "Bootcamp" : ""}
                </a>
              </div>
            ))}
          </div>

          <h1 className="text-[24px] text-[#FEF4A2] mt-6">Data Analytics</h1>
          <div className="flex flex-col gap-y-3 ">
            {dataexercises.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.exercise ? "Course" : ""}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-y-9 flex-start items-center mt-6">
            <button className="p-2 border w-[200px] rounded-xl hover:bg-gray-400 hover:text-black text-white">
              What is a Certificate?
            </button>
            <button className="p-2 border w-[200px] rounded-xl hover:bg-gray-400 hover:text-black text-white">
              What is a Bootcamp?
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="text-[24px] text-[#FEF4A2]">JavaScript</h1>

          <div className="flex flex-col gap-y-3 ">
            {jscertified.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.certificate ? "Certificate" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.course ? "Course" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.bootcamp ? "Bootcamp" : ""}
                </a>
              </div>
            ))}
          </div>

          <h1 className="text-[24px] text-[#FEF4A2] mt-6">Programs</h1>
          <div className="flex flex-col gap-y-3 ">
            {programs.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.certificate ? "Certificate" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.course ? "Course" : ""}
                </a>
                {item.bestValue ? (
                  <div className="flex items-center justify-center bg-green-500 p-0.5 rounded-xl cursor-pointer w-[80px]">
                    <p className="text-[9px]">Best Value!</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[24px] text-[#FEF4A2]">Backend</h1>

          <div className="flex flex-col gap-y-3 ">
            {backendCertified.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.certificate ? "Certificate" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.course ? "Course" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.bootcamp ? "Bootcamp" : ""}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertfiedDropdown;

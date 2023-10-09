import { FaCrosshairs } from "react-icons/fa";
import {
  htmlcssnavitems,
  jsitems,
  backenditems,
  dataitems,
  webitems,
} from "../../constants";

const TutorialsDropdown = () => {
  return (
    <div className="absolute top-16 left-0 w-full bg-[#292B35] h-auto z-10 p-12">
      <div className="flex justify-between items-center ml-24 mb-12">
        <h1 className="text-[32px] text-[#FEF4A2] font-bold">Tutorials</h1>
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
            {htmlcssnavitems.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  Learn <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.tutorial ? "Tutorial" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.ref ? "Reference" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item?.overview ? "Overview" : ""}
                </a>
              </div>
            ))}
          </div>

          <h1 className="text-[24px] text-[#FEF4A2] mt-8">Data Analytics</h1>
          <div className="flex flex-col gap-y-3 ">
            {dataitems.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  Learn <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.tutorial ? "Tutorial" : ""}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[24px] text-[#FEF4A2]">JavaScript</h1>

          <div className="flex flex-col gap-y-3 ">
            {jsitems.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  Learn <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.tutorial ? "Tutorial" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.ref ? "Reference" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item?.overview ? "Overview" : ""}
                </a>
              </div>
            ))}
          </div>

          <h1 className="text-[24px] text-[#FEF4A2] mt-8">Web Building</h1>
          <div className="flex flex-col gap-y-3 ">
            {webitems.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  <span className="font-bold">{item.name} </span>
                  <span>
                    {item?.hot ? (
                      <div className="inline bg-red-500 text-[12px] p-0.5 rounded-xl">
                        HOT!
                      </div>
                    ) : (
                      ""
                    )}
                  </span>
                  <span>
                    {item?.new ? (
                      <div className="inline bg-[#05AA6C] text-[12px] p-0.5 rounded-xl">
                        NEW!
                      </div>
                    ) : (
                      ""
                    )}
                  </span>
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[24px] text-[#FEF4A2]">Backend</h1>

          <div className="flex flex-col gap-y-3 mb-6">
            {backenditems.map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white">
                <h1
                  key={i}
                  className="text-[15px] cursor-pointer hover:bg-gray-100 hover:text-black"
                >
                  Learn <span className="font-bold">{item.name}</span>
                </h1>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.tutorial ? "Tutorial" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item.ref ? "Reference" : ""}
                </a>
                <a
                  href=""
                  className="text-[12px] underline text-[#FEF4A2] font-semibold hover:bg-[#05AA6C] hover:text-white"
                >
                  {item?.overview ? "Overview" : ""}
                </a>
              </div>
            ))}
          </div>

          <div className="h-auto w-[70%] border p-3 text-white">
            <div className="flex flex-col gap-y-5">
              <h1 className="font-bold">Next Bootcamp:</h1>
              <h1>November 14th</h1>
              <button className="w-[100%] p-1 bg-[#05AA6C] rounded-2xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsDropdown;

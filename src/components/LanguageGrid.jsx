import image from "../images/codeeditor.gif";
import image2 from "../images/dynamic.gif";
import image3 from "../images/working.png";

const LanguageGrid = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 text-black ">
        <div className="h-auto bg-[#292A34] flex justify-center items-center flex-col dark:bg-[#0C1720]">
          <div className="flex gap-y-14 flex-col mt-8">
            <div className="w-[555px] bg-[#FEC0C6] flex flex-col justify-center items-center rounded-xl h-auto gap-y-8 p-4">
              <h1 className="text-[45px] font-bold">PHP</h1>
              <p className="text-[18px] font-semibold">
                A web server programming language
              </p>
              <button className="bg-[#292A34] text-white p-2 rounded-3xl w-[200px]">
                Learn PHP
              </button>
            </div>
            <div className="w-[555px] bg-[#F3ECEA] flex flex-col justify-center items-center rounded-xl h-auto gap-y-8 p-4">
              <h1 className="text-[45px] font-bold">Java</h1>
              <p className="text-[18px] font-semibold">
                A programming language
              </p>
              <button className="bg-[#292A34] text-white p-2 rounded-3xl w-[200px]">
                Learn Java
              </button>
            </div>
            <div className="w-[555px] bg-[#97D5D4] flex flex-col justify-center items-center rounded-xl h-auto gap-y-8 p-4">
              <h1 className="text-[45px] font-bold">W3.CSS</h1>
              <p className="text-[18px] font-semibold">
                A CSS framework for faster and better responsive web pages
              </p>
              <button className="bg-[#292A34] text-white p-2 rounded-3xl w-[200px]">
                Learn W3.CSS
              </button>
            </div>
          </div>
        </div>

        <div className="h-auto bg-[#292A34] dark:bg-[#0C1720] flex justify-center items-center flex-col">
          <div className="flex gap-y-14 flex-col mt-8">
            <div className="w-[555px] bg-[#FEF5A3] flex flex-col justify-center items-center rounded-xl h-auto gap-y-8 p-4">
              <h1 className="text-[45px] font-bold">jQuery</h1>
              <p className="text-[18px] font-semibold">
                A JS library for developing web pages
              </p>
              <button className="bg-[#292A34] text-white p-2 rounded-3xl w-[200px]">
                Learn jQuery
              </button>
            </div>
            <div className="w-[555px] bg-[#D9EFE0] flex flex-col justify-center items-center rounded-xl h-auto gap-y-8 p-4">
              <h1 className="text-[45px] font-bold">C++</h1>
              <p className="text-[18px] font-semibold">
                A programming language
              </p>
              <button className="bg-[#292A34] text-white p-2 rounded-3xl w-[200px]">
                Learn C++
              </button>
            </div>
            <div className="w-[555px] bg-[#E6E8EB] flex flex-col justify-center items-center rounded-xl h-auto gap-y-8 p-4">
              <h1 className="text-[45px] font-bold">Bootstrap</h1>
              <p className="text-[18px] font-semibold">
                A CSS framework for designing better web pages
              </p>
              <button className="bg-[#292A34] text-white p-2 rounded-3xl w-[200px]">
                Learn Bootstrap
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[#292A34] dark:bg-[#0C1720] flex justify-center items-center flex-col pt-[100px]">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-[65px] text-white font-extrabold">Code Editor</h1>
          <h4 className="text-[20px] text-white font-semibold">
            With our online code editor, you can edit code and view the result
            in your browser
          </h4>
        </div>
        <div className="flex flex-col justify-center items-center mb-14">
          <div
            className="text-black  xl:w-[1100px] xl:h-[310px] bg-cover p-4 mb-4"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="flex justify-start flex-col items-start">
            <button className="p-2 text-white bg-[#04AB6C] rounded-md mb-3">
              Try Frontend Editor (HTML/CSS/JS)
            </button>
            <button className="p-2 text-black bg-[#FEF5A3] rounded-md">
              Try Backend Editor (Python/PHP/C..)
            </button>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[#292A34] flex justify-center items-center flex-col pt-[100px]">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-[65px] text-white font-extrabold">
            W3Schools Spaces
          </h1>
          <h4 className="text-[20px] text-white font-semibold flex flex-col justify-center items-center">
            If you want to create your own website, check out W3Schools Spaces.
            <br />
            <span>It is free to use, and does not require any setup:</span>
          </h4>
        </div>
        <div className="flex flex-col justify-center items-center mb-14">
          <div
            className="text-black  w-[800px] h-[310px] bg-cover p-4 mb-4"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
          <div
            className="text-black  w-[1100px] h-[310px] bg-cover p-4 mb-4"
            style={{ backgroundImage: `url(${image3})` }}
          ></div>
          <div className="flex justify-start flex-col items-start">
            <button className="p-2 text-white bg-[#04AB6C] rounded-2xl mb-3 w-[500px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageGrid;

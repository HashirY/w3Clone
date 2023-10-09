const ThirdHero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-black">
      <div className="h-auto bg-[#FEF4A2] flex justify-center items-center flex-col">
        <div>
          <h1 className="text-[100px] font-semibold ml-20">CSS</h1>
          <p className="text-[19px] font-bold">
            The language for styling web pages
          </p>
        </div>
        <div className="flex flex-col gap-y-7 mt-6">
          <button className="bg-[#05AB6D] text-white p-2 rounded-3xl w-[170px]">
            Learn CSS
          </button>
          <button className="bg-[#282A35] text-white rounded-3xl w-[170px] p-2">
            CSS Reference
          </button>
          <button className="bg-[#FEC1C7] rounded-3xl w-[170px] p-2 mb-[50px]">
            Get Certified
          </button>
        </div>
      </div>
      <div className="h-auto bg-[#FEF4A2] flex justify-center items-center">
        <div className="h-auto bg-[#E6E8EB] dark:bg-[#38444D] p-5 rounded-lg xl:w-[450px] sm:w-full m-3">
          <h1 className="font-bold mt-8 text-[24px] mb-4 dark:text-white">
            CSS Example :{" "}
          </h1>
          <div className="bg-white dark:bg-[#14202A] h-auto w-auto rounded-xl p-5">
            <div className="ml-4 p-0.5">
              <span className="text-[#B82A2B] dark:text-[#FF9898]">body </span>
              <span className="text-black dark:text-white">&#123;</span>
              <br />
              <span className="ml-6 text-[#FE0100] dark:text-[#C4A4C5]">
                background-color:{" "}
                <span className="text-[#0001CC] dark:text-[#73C498]">
                  lightblue;
                </span>
              </span>
              <br />
              <span className="text-black dark:text-white">&#125;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#B82A2B] dark:text-[#FF9898]">h1 </span>
              <span className="text-black dark:text-white">&#123;</span>
              <br />
              <span className="ml-6 text-[#FE0100] dark:text-[#C4A4C5]">
                color:{" "}
                <span className="text-[#0001CC] dark:text-[#73C498]">
                  white;
                </span>
              </span>
              <br />
              <span className="ml-6 text-[#FE0100] dark:text-[#C4A4C5]">
                text-align:{" "}
                <span className="text-[#0001CC] dark:text-[#73C498]">
                  center;
                </span>
              </span>
              <br />
              <span className="text-black dark:text-white">&#125;</span>
            </div>
          </div>
          <button className="bg-[#05AB6D] text-white p-2 mt-4 w-full rounded-3xl">
            Try It Yourself
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdHero;

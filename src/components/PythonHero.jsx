const PythonHero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-black">
      <div className="h-auto bg-[#F3ECEA] flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[100px] font-semibold ">Python</h1>
          <p className="text-[19px] font-bold">
            A popular programming language
          </p>
        </div>
        <div className="flex flex-col gap-y-7 mt-6">
          <button className="bg-[#05AB6D] text-white p-2 rounded-3xl w-[170px]">
            Learn Python
          </button>
          <button className="bg-[#282A35] text-white rounded-3xl w-[170px] p-2">
            Python Reference
          </button>
          <button className="bg-[#FEC1C7] rounded-3xl w-[170px] p-2 mb-[50px]">
            Get Certified
          </button>
        </div>
      </div>
      <div className="h-auto bg-[#F3ECEA] flex justify-center items-center">
        <div className="h-auto bg-[#E6E8EB] dark:bg-[#38444D] p-5 xl:w-[450px] sm:w-full m-3 rounded-lg">
          <h1 className="font-bold mt-8 text-[24px] mb-4 dark:text-white">
            Python Example :{" "}
          </h1>
          <div className="bg-white h-auto w-auto rounded-xl p-5 dark:bg-[#14202A]">
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#C4A4C5]">
                if{" "}
                <span className="text-[#FE0100] dark:text-[#81B6FE]">5 </span>{" "}
                <span className="text-black dark:text-white"> &gt; </span>{" "}
                <span className="text-[#FE0100] dark:text-[#81B6FE]">
                  2 <span className="text-black dark:text-white">:</span>
                </span>
              </span>
              <br />
              <span className="ml-4 dark:text-white">
                print(
                <span className="text-[#B82A2B] dark:text-[#88C898]">
                  &quot;Five is greater than two!&quot;
                </span>
                )
              </span>
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

export default PythonHero;

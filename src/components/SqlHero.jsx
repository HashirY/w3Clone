const SqlHero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-black">
      <div className="h-auto bg-[#97D5D4] flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[100px] font-semibold ">SQL</h1>
          <p className="text-[19px] font-bold">
            A language for accessing databases
          </p>
        </div>
        <div className="flex flex-col gap-y-7 mt-6">
          <button className="bg-[#05AB6D] text-white p-2 rounded-3xl w-[170px]">
            Learn SQL
          </button>
          <button className="bg-[#282A35] text-white rounded-3xl w-[170px] p-2">
            SQL Reference
          </button>
          <button className="bg-[#FEC1C7] rounded-3xl w-[170px] p-2 mb-[50px]">
            Get Certified
          </button>
        </div>
      </div>
      <div className="h-auto bg-[#97D5D4] flex justify-center items-center">
        <div className="h-auto bg-[#E6E8EB] dark:bg-[#38444D] p-5 xl:w-[450px] sm:w-full m-3 rounded-lg">
          <h1 className="font-bold mt-8 text-[24px] mb-4 dark:text-white">
            SQL Example :{" "}
          </h1>
          <div className="bg-white h-auto w-auto rounded-xl p-5 dark:bg-[#14202A]">
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#81B6FE]">
                SELECT <span className="text-black dark:text-white">* </span>{" "}
                <span className="text-[#4A19CC] dark:text-[#81B6FE]">
                  FROM{" "}
                </span>
                <span className="text-black dark:text-white">Customers</span>
              </span>
              <br />
              <span className="text-[#4A19CC] dark:text-[#81B6FE]">
                WHERE{" "}
                <span className="text-black dark:text-white">Country=</span>
                <span className="text-[#B82A2B] dark:text-[#88C87C]">
                  &quot;Mexico&quot;
                </span>
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

export default SqlHero;

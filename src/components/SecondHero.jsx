import { Link } from "react-router-dom";

const SecondHero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-black">
      <div className="h-auto bg-[#D9EFE0] flex justify-center items-center flex-col">
        <div>
          <h1 className="text-[100px] font-semibold ml-9">HTML</h1>
          <p className="text-[19px] font-bold">
            The language for building web pages
          </p>
        </div>
        <div className="flex flex-col gap-y-7 mt-6">
          <button className="bg-[#05AB6D] text-white p-2 rounded-3xl w-[170px]">
            Learn HTML
          </button>
          <button className="bg-[#FEF4A2] rounded-3xl w-[170px] p-2">
            Video Tutorial
          </button>
          <button className="bg-[#282A35] text-white rounded-3xl w-[170px] p-2">
            HTML Reference
          </button>
          <button className="bg-[#FEC1C7] rounded-3xl w-[170px] p-2 mb-[50px]">
            Get Certified
          </button>
        </div>
      </div>
      <div className="h-auto bg-[#D9EFE0] flex justify-center items-center">
        <div className="h-auto bg-[#E6E8EB] dark:bg-[#38444D] p-5 xl:w-[450px] sm:w-full rounded-lg ">
          <h1 className="font-bold mt-8 text-[24px] mb-4 dark:text-white">
            HTML Example :{" "}
          </h1>
          <div className="bg-white dark:bg-[#14202A] h-[350px] w-auto rounded-xl p-5">
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                !DOCTYPE
              </span>
              <span className="text-[#FE5400] "> html</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">html</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">head</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5 ">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">title</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
              <span className="dark:text-white">HTML Tutorial</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;title
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;head
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5 mb-4">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">body</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5 ">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">h1</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
              <span className="dark:text-white">This is a heading</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;h1
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5 mb-4">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">p</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
              <span className="dark:text-white">This is a paragraph</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">&#47;p</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;body
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;html
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
          </div>
          <Link to={"/codeeditor"}>
            <button className="bg-[#05AB6D] text-white p-2 mt-4 w-full rounded-3xl">
              Try It Yourself
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;

const JavaScriptHero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="h-auto bg-[#282A35] flex justify-center items-center flex-col">
        <div>
          <h1 className="text-[80px] font-semibold ml-20 text-white">
            JavaScript
          </h1>
          <p className="text-[19px] font-bold text-white ml-20">
            The language for styling web pages
          </p>
        </div>
        <div className="flex flex-col gap-y-7 mt-6">
          <button className="bg-[#05AB6D] text-white p-2 rounded-3xl w-[170px]">
            Learn JavaScript
          </button>
          <button className="bg-white text-black rounded-3xl w-[170px] p-2">
            Javascript Reference
          </button>
          <button className="bg-[#FEC1C7] text-black rounded-3xl w-[170px] p-2 mb-[50px]">
            Get Certified
          </button>
        </div>
      </div>
      <div className="h-auto bg-[#282A35] flex justify-center items-center">
        <div className="h-auto bg-[#E6E8EB] dark:bg-[#38444D] p-5 xl:w-[450px] sm:w-full m-3 rounded-lg">
          <h1 className="font-bold mt-8 text-[24px] mb-4 text-black dark:text-white">
            JavaScript Example :{" "}
          </h1>
          <div className="bg-white dark:bg-[#14202A] h-auto w-auto rounded-xl p-5">
            <div className="ml-4 p-0.5 mb-3">
              <span className="text-[#4A19CC] dark:text-[#3293A5]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                button{" "}
                <span className="text-[#FE0100] dark:text-[#C4A4C5]">
                  onClick
                  <span className="text-[#0000D0] dark:text-[#88C898]">
                    =&quot;myFunction()&quot;
                  </span>
                </span>
              </span>
              <span className="text-[#4A19CC] dark:text-[#3293A5]">&gt;</span>
              Click Me!
              <br />
              <span className="text-[#4A19CC] dark:text-[#3293A5]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;button
              </span>
              <span className="text-[#4A19CC] dark:text-[#3293A5]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#3293A5]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">script</span>
              <span className="text-[#4A19CC] dark:text-[#3293A5]">&gt;</span>
              <br />
              <span className="text-[#4A19CC] dark:text-[#C4A4C5]">
                function{" "}
                <span className="text-black dark:text-white">
                  myFunction(){" "}
                </span>
                <span className="text-black dark:text-white">&#123;</span>
              </span>
              <br />
              <div className="ml-8 text-black dark:text-white">
                let x = document.getElementById(
                <span className="text-[#B82A2B] dark:text-[#88C898] ">
                  &quot;demo&quot;
                </span>
                )
                <br />
                x.style.fontSize ={" "}
                <span className="text-[#B82A2B] dark:text-[#88C898]">
                  &quot;25px&quot;;
                </span>
                <br />
                x.style.color =
                <span className="text-[#B82A2B] dark:text-[#88C898]">
                  &quot;red&quot;;
                </span>
                <br />
              </div>
              <span className="text-black dark:text-white">&#125;</span>
              <br />
              <span className="text-[#4A19CC] dark:text-[#3293A5]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;script
              </span>
              <span className="text-[#4A19CC] dark:text-[#3293A5]">&gt;</span>
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

export default JavaScriptHero;

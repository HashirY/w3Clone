import {
  cssreferences,
  jsleftsidebaritems1,
  jsleftsidebaritems2,
  jsleftsidebaritems3,
} from "../../constants";

import image from "../../images/job.png";

const JsPage = () => {
  const handleClick = () => {
    // console.log("Hey");

    const ptag = document.querySelector("#time");
    ptag.textContent = new Date();
  };

  return (
    <main className="flex bg-[#E6E9EA] dark:bg-[#15212A] ">
      <span className="w-[20%] bg-[#E6E9EA] h-[510px] text-black flex flex-col gap-y-2 pt-6 items-start overflow-y-scroll dark:bg-[#15212A] dark:text-white">
        <h1 className="text-[21px] ml-4 mb-3">JS TUTORIAL</h1>
        <div>
          {jsleftsidebaritems1.map((item, i) => (
            <h1
              key={i}
              className={`ml-4 cursor-pointer ${
                i == 0 ? "bg-[#05AB6D] p-0.5 rounded-md w-full text-white" : ""
              } hover:bg-[#C0C1C0] p-0.5 rounded-md w-full`}
            >
              {item}
            </h1>
          ))}
        </div>
        <h1 className="text-[21px] ml-4 mb-3">JS HTML DOM</h1>
        <div>
          {jsleftsidebaritems2.map((item, i) => (
            <h1 key={i} className="ml-4 cursor-pointer">
              {item}
            </h1>
          ))}
        </div>
        <h1 className="text-[21px] ml-4 mb-3">JS Browser DOM</h1>
        <div>
          {jsleftsidebaritems3.map((item, i) => (
            <h1 key={i} className="ml-4 cursor-pointer">
              {item}
            </h1>
          ))}
        </div>
      </span>

      <main className="bg-white w-full h-auto text-black dark:bg-[#1D2B34] dark:text-white pl-8  pr-8">
        <div className="mt-28">
          <h1 className="text-[40px] z-10 top-0 right-0 mb-5">
            JavaScript Tutorial
          </h1>
          <div className="flex justify-between">
            <button className="bg-[#05AB6D] p-2 rounded-md w-[100px] text-white">
              {" "}
              &lt; Home
            </button>
            <button className="bg-[#05AB6D] p-2 rounded-md w-[100px] text-white">
              Next &gt;{" "}
            </button>
          </div>
        </div>
        <div className="w-full bg-[#D8EFE1] mt-8 h-auto pt-10 pl-3 dark:bg-[#183D3C] mb-10">
          <div className="flex flex-col gap-y-5">
            <p>
              JavaScript is the world&apos;s most popular programming language
            </p>
            <p>JavaScript is the programming language of the Web.</p>
            <p>
              TThis tutorial will teach you JavaScript from basic to advanced.
            </p>
            <button className="bg-[#05AB6D] p-1 w-[30%] rounded-md text-white font-semibold mb-2">
              Start learning JavaScript now!!
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-y-4">
          <h1 className="text-[40px]">Examples in Each Chapter</h1>
          <p>
            With our &quot;Try it Yourself&quot; editor, you can edit the source
            code and view the result.
          </p>
        </div>

        <div className="h-auto bg-[#E6E8EB] dark:bg-[#38444D] p-5 rounded-lg xl:w-auto sm:w-full m-3">
          <h1 className="font-bold mt-8 text-[24px] mb-4 dark:text-white">
            Example :{" "}
          </h1>
          <div className="bg-white dark:bg-[#14202A] h-auto w-auto rounded-xl p-5">
            <h1 className="text-[40px]">My First JavaScript</h1>
            <button
              className="bg-gray-100 p-3 mt-3 rounded-lg dark:text-black"
              onClick={handleClick}
            >
              Click me to display date and time
            </button>
            <p id="time" className="mt-3"></p>
          </div>
        </div>
        <hr className="border mt-4" />

        <div className="mt-6 mb-7">
          <h1 className="text-[40px] mb-4">Use the Menu</h1>
          <p className="mb-2">
            We recommend reading this tutorial, in the sequence listed in the
            menu.
          </p>
          <p>
            If you have a large screen, the menu will always be present on the
            left
          </p>
        </div>

        <hr className="border mt-4" />
        <div className="mt-6 mb-7">
          <h1 className="text-[40px] mb-4">Learn By Examples</h1>
          <p className="mb-4">
            Examples are better than 1000 words. Examples are often easier to
            understand than text explanations.
          </p>

          <div className="flex flex-col justify-start items-start gap-y-3 bg-[#FFFFCC] p-4 dark:bg-[#FEF5A3]">
            <p className="text-[18px] text-black">
              If you try all the examples, you will learn a lot about
              JavaScript, in a very short time!
            </p>
            <button className="bg-[#05AA6C] p-1 w-[30%] rounded-md text-white font-semibold mb-2 mt-4">
              Go to JS Examples
            </button>
          </div>
        </div>

        <hr className="border mt-4" />
        <div className="mt-6 mb-7">
          <h1 className="text-[40px] mb-4">Why Study JavaScript?</h1>
          <p className="mb-2">
            JavaScript is one of the <b>3 languages</b> all web developers must
            learn:
          </p>
          <ol className="flex flex-col gap-y-4 list-decimal ml-8 mb-4">
            <li>
              {" "}
              <b className="underline">HTML </b>
              to define the content of web pages
            </li>
            <li>
              {" "}
              <b className="underline">CSS </b>
              to specify the layout of web pages
            </li>
            <li>
              {" "}
              <b>JavaScript </b>
              to program the behavior of web pages
            </li>
          </ol>

          <div className="w-full h-auto bg-[#D9EFE0] p-6 dark:bg-[#183C3D]">
            <p className="mb-4">
              This tutorial covers every version of JavaScript:
            </p>

            <ul className="ml-8 list-disc">
              <li>The Original JavaScript ES1 ES2 ES3 (1997-1999)</li>
              <li>The First Main Revision ES5 (2009)</li>
              <li>The Second Revision ES6 (2015)</li>
              <li>All Yearly Additions (2016, 2017, 2018, 2019, 2020)</li>
            </ul>
          </div>
        </div>
        <hr className="border mt-4" />

        <div className="h-auto w-auto bg-[#292A34] dark:bg-[#38444D] p-6">
          <h1 className="text-[40px] text-white">
            Test Yourself With Exercises
          </h1>
          <div className="h-auto w-auto bg-white dark:bg-[#15212A] p-6 flex flex-col gap-y-6">
            <h1 className="text-[30px]">Exercise:</h1>
            <p className="text-[18px]">
              Create a variable called{" "}
              <span className="bg-[rgba(222,222,222,0.3)] text-[#ed143d] font-mono dark:text-[#FE9998]">
                carName
              </span>{" "}
              and assign the value{" "}
              <span className="bg-[rgba(222,222,222,0.3)] text-[#ed143d] font-mono dark:text-[#FE9998]">
                Volvo
              </span>{" "}
              to it.
            </p>
            <div className="w-auto h-auto bg-[#E6E9EA] dark:bg-[#38444D] p-3">
              <h1>
                var <input type="text" className="bg-white w-[50px]" /> = &quot;
                <input type="text" className="bg-white w-[50px]" /> &quot;;
              </h1>
            </div>
            <button className="bg-[#05AB6D] p-1 w-[30%] rounded-md text-white">
              Submit Answer
            </button>
          </div>
        </div>
        <hr className="border mt-4" />
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[40px]">JS Quiz</h1>
          <p>Test your JS skills with a quiz.</p>
          <button className="bg-[#2096F2] p-1 w-[30%] rounded-md text-white">
            Start JS Quiz
          </button>
        </div>
        <hr className="border mt-4" />

        <div className="flex flex-col gap-y-4">
          <h1 className="text-[40px]">My Learning</h1>
          <p className="text-[18px]">
            Track your progress with the free &quot;My Learning&quot; program
            here at W3Schools.
          </p>
          <p className="text-[18px]">
            Log in to your account, and start earning points!
          </p>
          <p className="text-[18px]">
            This is an optional feature. You can study W3Schools without using
            My Learning.
          </p>
          <div
            className="text-black  w-[990px] h-[440px] bg-cover p-4 mb-4"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <hr className="border mt-4" />

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col">
            <h1 className="text-[40px]">JS References</h1>
            <p className="text-[18px]">
              The reference contains examples for all properties, methods and
              events, and is continuously updated according to the latest web
              standards.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-y-4 gap-x-4 mb-10">
            {cssreferences.map((item, i) => (
              <div
                key={i}
                className="w-full bg-[#E6E9EA] flex justify-center items-center p-6 rounded-md hover:bg-black hover:text-white cursor-pointer
                  dark:bg-[#38444D] dark:hover:bg-black dark:hover:text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-start bg-[#292A34] h-auto w-auto p-10 gap-y-12 text-white dark:bg-[#0C1720] mb-20">
          <h1 className="text-[62px] text-[#FEC0C6] font-bold">
            Kickstart your career
          </h1>
          <h1 className="text-[62px] text-[#FEC0C6] ">
            Get certified by completing a CSS course
          </h1>
          <button className="bg-[#049863] p-4 rounded-3xl ">Get Started</button>
        </div>

        <div className="flex justify-between items-center mt-6 mb-6">
          <button className="bg-[#05AB6D] p-3 w-[20%] rounded-md text-white">
            Home
          </button>{" "}
          <button className="border p-3 w-[20%] rounded-md text-black font-semibold dark:text-white">
            Login to track progress
          </button>{" "}
          <button className="bg-[#05AB6D] p-3 w-[20%] rounded-md text-white">
            Next
          </button>
        </div>
        <hr className="border mt-4 mb-28" />
      </main>
    </main>
  );
};

export default JsPage;

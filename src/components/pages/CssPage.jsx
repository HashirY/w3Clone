import {
  cssleftsidebaritems1,
  cssleftsidebaritems2,
  cssleftsidebaritems3,
  cssreferences,
} from "../../constants";

import image from "../../images/job.png";

const CssPage = () => {
  return (
    <main className="flex bg-[#E6E9EA] dark:bg-[#15212A] ">
      <span className="w-[20%] bg-[#E6E9EA] h-[510px] text-black flex flex-col gap-y-2 pt-6 items-start overflow-y-scroll dark:bg-[#15212A] dark:text-white">
        <h1 className="text-[21px] ml-4 mb-3">CSS TUTORIAL</h1>
        <div>
          {cssleftsidebaritems1.map((item, i) => (
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
        <h1 className="text-[21px] ml-4 mb-3">CSS Advanced</h1>
        <div>
          {cssleftsidebaritems2.map((item, i) => (
            <h1 key={i} className="ml-4 cursor-pointer">
              {item}
            </h1>
          ))}
        </div>
        <h1 className="text-[21px] ml-4 mb-3">CSS Responsive</h1>
        <div>
          {cssleftsidebaritems3.map((item, i) => (
            <h1 key={i} className="ml-4 cursor-pointer">
              {item}
            </h1>
          ))}
        </div>
      </span>

      <main className="bg-white w-full h-auto text-black dark:bg-[#1D2B34] dark:text-white pl-8  pr-8">
        <div className="mt-28">
          <h1 className="text-[40px] z-10 top-0 right-0 mb-5">CSS Tutorial</h1>
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
            <p>CSS is the language we use to style an HTML document.</p>
            <p>CSS describes how HTML elements should be displayed.</p>
            <p>This tutorial will teach you CSS from basic to advanced</p>
            <button className="bg-[#05AB6D] p-1 w-[30%] rounded-md text-white font-semibold mb-2">
              Start learning CSS now!!
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-y-4">
          <h1 className="text-[40px]">Examples in Each Chapter</h1>
          <p>This CSS tutorial contains hundreds of CSS examples.</p>
          <p>
            With our online editor, you can edit the CSS, and click on a button
            to view the result.
          </p>
        </div>

        <div className="h-auto bg-[#E6E8EB] dark:bg-[#38444D] p-5 rounded-lg xl:w-auto sm:w-full m-3">
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

        <h1 className="mt-4 font-bold text-[21px]">
          Click on the &quot;Try it Yourself&quot; button to see how it works.
        </h1>
        <hr className="border mt-4" />

        <div className="mt-6 mb-7">
          <h1 className="text-[40px] mb-4">CSS Examples</h1>
          <p>
            Learn from over 300 examples! With our editor, you can edit the CSS,
            and click on a button to view the result.
          </p>
          <button className="bg-[#38444D] p-1 w-[30%] rounded-md text-white font-semibold mb-2 mt-4">
            Go to CSS Examples
          </button>
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
          <h1 className="text-[40px] mb-4">CSS Templates</h1>
          <p className="mb-2">
            We have created some responsive W3.CSS templates for you to use.
          </p>
          <p className="mb-2">
            You are free to modify, save, share, and use them in all your
            projects.
          </p>
          <a href="" className="underline hover:text-[#05AA6C]">
            Free CSS Templates!
          </a>
        </div>
        <hr className="border mt-4" />

        <div className="mt-6 mb-7">
          <h1 className="text-[40px]">CSS Exercises</h1>
          <p>This HTML tutorial also contains nearly 100 HTML exercises.</p>
        </div>

        <div className="h-auto w-auto bg-[#292A34] dark:bg-[#38444D] p-6">
          <h1 className="text-[40px] text-white">
            Test Yourself With Exercises
          </h1>
          <div className="h-auto w-auto bg-white dark:bg-[#15212A] p-6 flex flex-col gap-y-6">
            <h1 className="text-[30px]">Exercise:</h1>
            <p className="text-[18px]">
              Set the color of all &lt;p&gt; elements to red.
            </p>
            <div className="w-auto h-auto bg-[#E6E9EA] dark:bg-[#38444D] p-3">
              <h1>
                &lt;style&gt; <br />
                <input
                  type="text"
                  className="bg-white w-8 mr-1 mb-2"
                /> &#123; <br />
                <input
                  type="text"
                  className="bg-white mr-2 w-16 ml-8"
                /> red; <br />
                &#125; <br />
                &lt;/style&gt;
              </h1>
            </div>
            <button className="bg-[#05AB6D] p-1 w-[30%] rounded-md text-white">
              Submit Answer
            </button>
          </div>
        </div>
        <hr className="border mt-4" />
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[40px]">CSS Quiz</h1>
          <p>Test your CSS skills with a quiz.</p>
          <button className="bg-[#2096F2] p-1 w-[30%] rounded-md text-white">
            Start CSS Quiz
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
            <h1 className="text-[40px]">CSS References</h1>
            <p className="text-[18px]">
              At W3Schools you will find complete CSS references of all
              properties and selectors with syntax, examples, browser support,
              and more.
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

export default CssPage;

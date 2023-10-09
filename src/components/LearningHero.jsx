import image from "../images/job.png";

const LearningHero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#D9EFE0] h-auto w-full p-10 gap-y-9 text-black">
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h1 className="text-[65px] font-bold">My Learning</h1>
        <p className="text-[20px]">
          Track your progress with our <b>free</b> &quot;My Learning&quot;
          program.
        </p>
        <p className="text-[20px]">
          Log in to your account, and start earning points!
        </p>
      </div>
      <div
        className="text-black  w-[1100px] h-[540px] bg-cover p-4 mb-4"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <button className="p-2 text-white bg-[#04AB6C] rounded-2xl mb-3 w-[500px] font-bold">
        Sign Up for Free
      </button>
    </div>
  );
};

export default LearningHero;

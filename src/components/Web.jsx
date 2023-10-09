import image from "../images/webimage.jpg";

const Web = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#E6E8EB] h-auto w-full p-10 gap-y-9 text-black dark:bg-[#38444D] dark:text-[#DCDDDC]">
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h1 className="text-[65px] font-bold">Web Templates</h1>
        <p className="text-[20px]">
          Browse our selection of <b>free</b> responsive HTML Templates
        </p>
      </div>
      <div
        className="text-black  w-[1100px] h-[340px] bg-cover p-4 mb-4"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <button className="p-2 text-white bg-[#292A34] rounded-2xl mb-3 w-[500px] font-bold">
        Browse Templates
      </button>
    </div>
  );
};

export default Web;

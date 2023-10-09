import image from "../images/lynx1.png";

const CodeGame = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#97D5D4] h-auto w-full p-10 gap-y-9 text-black">
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h1 className="text-[65px] font-bold">Code Game</h1>
        <p className="text-[20px] font-bold">
          Help the Lynx collect pine cones!
        </p>
      </div>
      <button
        className="text-black w-[150px] h-[250px]  bg-cover p-4 mb-4 hover:opacity-50"
        style={{ backgroundImage: `url(${image})` }}
      ></button>
      <button className="bg-[#292A34] p-4 w-[300px] font-bold rounded-3xl text-white">
        Play Game
      </button>
    </div>
  );
};

export default CodeGame;

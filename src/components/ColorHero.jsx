import image from "../images/colorpicker.png";

const ColorHero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F3ECEA] h-auto w-full p-10 gap-y-9 text-black">
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h1 className="text-[65px] font-bold">Color Picker</h1>
        <p className="text-[20px] font-bold">
          W3Schools&apos; famous color picker:
        </p>
      </div>
      <button
        className="text-black  w-[235px] h-[200px] bg-cover p-4 mb-4"
        style={{ backgroundImage: `url(${image})` }}
      ></button>
    </div>
  );
};

export default ColorHero;

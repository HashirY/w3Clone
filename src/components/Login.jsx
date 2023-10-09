import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="h-[120vh] w-full bg-white p-6 text-black">
      <div className="flex justify-between items-center">
        <h1>W3 School</h1>
        <Link to="/">
          <button className="text-[48px] cursor-pointer">X</button>
        </Link>
      </div>
      <div className="flex flex-col  border h-auto w-[40%] ml-auto mr-auto p-7 gap-y-4 rounded-md">
        <h1 className="text-[32px] font-bold">Log in</h1>
        <div className="flex flex-col gap-y-1">
          <div className="flex  justify-around flex-row">
            <h1 className="text-[16px] mr-[190px] font-bold">Email</h1>
            <h1 className="text-[14px] mr-[25px]">Need an account?</h1>
            <h1 className="text-[14px] font-semibold text-[#05AB6D]">
              Sign Up?
            </h1>
          </div>
          <input type="text" className="bg-white border p-4 rounded-md" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex  justify-around flex-row">
            <h1 className="text-[16px] mr-[350px] font-bold">Password</h1>
          </div>
          <input
            type="password"
            className="bg-white border p-4 rounded-md w-[428.79px]"
          />
        </div>
        <Link to="/">
          <button
            className="w-full bg-[#05AB6D] p-3 rounded-lg font-bold text-white"
            onClick={handleLogin}
          >
            Log in
          </button>
        </Link>
        <hr className="mt-4 border  w-full" />
        <div className="flex justify-center items-center flex-col gap-y-4">
          <button className="w-[428.79px] bg-[#1876F3] hover:bg-[#1977F3] p-3 rounded-lg font-bold text-white flex justify-center items-center">
            <FaFacebook className="mr-4" />
            {"  "} Continue with Facebook
          </button>
          <button className="w-[428.79px] bg-white border p-3 rounded-lg font-bold text-black flex justify-center items-center hover:bg-[#DFE2E7]">
            <FaGoogle className="mr-4" />
            {"  "} Continue with Google
          </button>
          <button className="w-[428.79px] bg-white border p-3 rounded-lg font-bold text-black flex justify-center items-center hover:bg-[#DFE2E7]">
            <FaGithub className="mr-4" />
            {"  "} Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

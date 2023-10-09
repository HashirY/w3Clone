import { Link } from "react-router-dom";

const BelowNavbar = () => {
  return (
    <div className="h-10 lg:w-full w-[100%]  bg-[#282A35] flex gap-x-10 text-white p-2  overflow-hidden">
      <Link to="/html">
        <div className="hover:scale-105 cursor-pointer">
          <p>HTML</p>
        </div>
      </Link>

      <Link to="/css">
        <div className="hover:scale-105 cursor-pointer">
          <p>CSS</p>
        </div>
      </Link>

      <Link to={"/js"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>JAVASCRIPT</p>
        </div>
      </Link>
      <Link to={"/sql"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>SQL</p>
        </div>
      </Link>
      <div className="hover:scale-105 cursor-pointer">
        <p>PYTHON</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>JAVA</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>C</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>C++</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>C#</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>BOOTSTRAP</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>REACT</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>PHP</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>PYTHON</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>NODEJS</p>
      </div>
      <div className="hover:scale-105 cursor-pointer">
        <p>GIT</p>
      </div>
    </div>
  );
};

export default BelowNavbar;

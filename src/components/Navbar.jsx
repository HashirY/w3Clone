// import { useEffect, useState } from "react";
import { useState } from "react";
import {
  FaCaretDown,
  FaCaretUp,
  FaCode,
  FaSearch,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import TutorialsDropdown from "./dropdowns/TutorialsDropdown";
import ExercisesDropdown from "./dropdowns/ExercisesDropdown";
import CertfiedDropdown from "./dropdowns/CertifiedDropdown";
import ServicesDropdown from "./dropdowns/ServicesDropdown";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpenTutorial, setIsOpenTutorial] = useState(false);
  const [isOpenExercises, setIsOpenExercises] = useState(false);
  const [isOpenCertified, setIsOpenCertified] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const html = document.querySelector("html");
  setIsSticky;

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const isScrolled = scrollY > 0;
  //     setIsSticky(isScrolled);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav
      className={`bg-white p-4 flex gap-x-7 dark:bg-[#1C2B35] dark:text-white z-50 ${
        isSticky ? "fixed top-0 left-0 right-0" : ""
      } text-black w-full md:w-[100%]`}
    >
      <Link to="/">
        <div className="text-xl font-semibold mr-4 dark:text-white">
          W3 School
        </div>
      </Link>
      <div className="flex gap-x-5">
        <div
          className="mt-0.5 flex "
          onClick={() => setIsOpenTutorial((prev) => !prev)}
        >
          <p className="dark:text-white hover:scale-105 hover:cursor-pointer">
            Tutorials
          </p>
          {isOpenTutorial ? (
            <FaCaretUp className="mt-1 dark:text-white" />
          ) : (
            <FaCaretDown className="mt-1 dark:text-white" />
          )}
          {isOpenTutorial && <TutorialsDropdown />}
        </div>
        <div
          className="mt-0.5 flex "
          onClick={() => setIsOpenExercises((prev) => !prev)}
        >
          <p className="dark:text-white hover:scale-105 hover:cursor-pointer">
            Exercises
          </p>
          {isOpenExercises ? (
            <FaCaretUp className="mt-1 dark:text-white" />
          ) : (
            <FaCaretDown className="mt-1 dark:text-white" />
          )}
          {isOpenExercises && <ExercisesDropdown />}
        </div>
        <div
          className="mt-0.5 flex"
          onClick={() => setIsOpenCertified((prev) => !prev)}
        >
          <p className="dark:text-white hover:scale-105 hover:cursor-pointer">
            Get Certified
          </p>
          {isOpenCertified ? (
            <FaCaretUp className="mt-1 dark:text-white" />
          ) : (
            <FaCaretDown className="mt-1 dark:text-white" />
          )}
          {isOpenCertified && <CertfiedDropdown />}
        </div>
        <div
          className="mt-0.5 flex"
          onClick={() => setIsOpenServices((prev) => !prev)}
        >
          <p className="dark:text-white hover:scale-105 hover:cursor-pointer">
            Services
          </p>
          {isOpenServices ? (
            <FaCaretUp className="mt-1 dark:text-white" />
          ) : (
            <FaCaretDown className="mt-1 dark:text-white" />
          )}
          {isOpenServices && <ServicesDropdown />}
        </div>
      </div>
      <div className="xl:flex lg:flex relative sm:hidden">
        <input
          type="text"
          placeholder="Search here..."
          className="h-8 w-[10rem]  rounded-xl p-2 border border-gray-300 bg-white"
        />
        <div className="absolute right-1 top-2">
          <FaSearch className="dark:text-black" />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            html.classList.toggle("dark");
          }}
          className="w-7 h-7 rounded-full bg-black mt-0.5"
        ></button>
      </div>
      <div className="flex gap-x-10 mt-0.5 ml-12 ">
        <Link to={"/spaces"}>
          <div className="flex gap-x-1 hover:scale-105 hover:cursor-pointer hidden lg:flex">
            <FaCode className="mt-1.5 text-blue-500" />
            <p>Spaces</p>
          </div>
        </Link>
        <div className="lg:flex hidden gap-x-1 hover:scale-105 hover:cursor-pointer">
          <FaShoppingCart className="mt-1.5 text-blue-500" />
          <p>Certificates</p>
        </div>
      </div>
      {!isLoggedIn && (
        <Link to="/login">
          <button className="bg-[#D8EEE0] p-2 absolute top-[10px] right-12 text-black rounded-3xl pl-3 pr-3 hidden md:block lg:block">
            LogIn
          </button>
        </Link>
      )}
      {isLoggedIn && (
        <div className="flex items-center cursor-pointer">
          <div className="dropdown dropdown-end absolute ">
            <label tabIndex={0} className="btn rounded-btn text-[#D8EEE0]">
              User
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow dark:bg-base-100 rounded-box w-52 mt-4 bg-white"
            >
              <li>
                <a onClick={handleLogout}>
                  Logout <FaSignOutAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

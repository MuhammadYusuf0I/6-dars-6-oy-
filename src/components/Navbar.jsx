import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";

import NavbarLinks from "./NavbarLinks";

const themes = {
  winter: "winter",
  dracula: "dracula",
};
function ThemFromLocalStorage() {
  return localStorage.getItem("theme") || themes.winter;
}

function Navbar() {
  const [currentTheme, setCurrentTheme] = useState(ThemFromLocalStorage());

  function handleMode() {
    setCurrentTheme((prevTheme) =>
      prevTheme === themes.winter ? themes.dracula : themes.winter
    );
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);
  return (
    <div className="bg-base-300 py-6 mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link to={"/"} className="btn  btn-primary hidden lg:flex ">
            My Market
          </Link>

          <div className="  dropdown lg:hidden  btn-primary ">
            <div tabIndex={0} role="button" className=" btn m-1">
              My Market
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavbarLinks></NavbarLinks>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavbarLinks></NavbarLinks>
        </div>
        <div className="navbar-end flex gap-5 items-center">
          <label className="swap swap-rotate" onClick={handleMode}>
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <IoSunny className="swap-on fill-current w-6 h-6" />

            {/* moon icon */}
            <IoMoon className="swap-off fill-current w-6 h-6" />
          </label>
          <button className="btn btn-primary"> Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

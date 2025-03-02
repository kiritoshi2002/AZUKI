import React, { useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbart = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="sticky top-0 w-full z-50 dark:bg-neutral-900 dark">
      <div className=" ">
        <div className="flex flex-row justify-between p-3 md:px-32 px-5 bg-neutral-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-none">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} className=" dark:text-white " />
            </span>
            <h1 className="text-xl font-semibold  dark:text-white px-2 pt-1">
              Azuki
            </h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <NavLink
              to="/"
              className="text-gray-800 hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
            >
              Home
            </NavLink>

            {/* Restaurant Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1">
                <span className="hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white">
                  The Restaurant
                </span>
                <BiChevronDown
                  className="cursor-pointer text-black dark:text-white"
                  size={25}
                />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-lg p-5">
                <li>
                  <NavLink
                    to="/restaurant"
                    className="text-gray-800 hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
                  >
                    The Restaurant
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/chefs"
                    className="text-gray-800 hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
                  >
                    Chefs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/philosophy"
                    className="text-gray-800 hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
                  >
                    Our Philosophy
                  </NavLink>
                </li>
              </ul>
            </div>

            <NavLink
              to="/menu"
              className="text-gray-800 hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
            >
              Menu
            </NavLink>

            {/* Contact Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1">
                <span className="hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white">
                  Contact
                </span>
                <BiChevronDown
                  className="cursor-pointer text-black dark:text-white"
                  size={25}
                />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-lg p-5">
                <li>
                  <NavLink
                    to="/service"
                    className="text-gray-800 hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/communication"
                    className="text-gray-800 hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
                  >
                    Communication and Press
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/work-with-us"
                    className="text-gray-800 hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
                  >
                    Work with Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <Button title="Login" />
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose
                size={25}
                className="text-black dark:text-white"
                onClick={handleChange}
              />
            ) : (
              <AiOutlineMenuUnfold
                size={25}
                className="text-black dark:text-white"
                onClick={handleChange}
              />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black dark:bg-neutral-900 text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <NavLink
            to="/"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/restaurant"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            The Restaurant
          </NavLink>

          <NavLink
            to="/chefs"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Chefs
          </NavLink>

          <NavLink
            to="/philosophy"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Our Philosophy
          </NavLink>

          <NavLink
            to="/menu"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </NavLink>

          <NavLink
            to="/service"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Service
          </NavLink>

          <NavLink
            to="/communication"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Communication and Press
          </NavLink>

          <NavLink
            to="/work-with-us"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Work with Us
          </NavLink>

          <Button title="Login" />
        </div>
      </div>
    </div>
  );
};

export default Navbart;

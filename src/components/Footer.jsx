import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-neutral-900 text-white  mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Azuki Restaurant</h1>
          <p className=" text-sm">A place where Health is served</p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <NavLink
              to="/"
              className="text-white hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
            >
              Home
            </NavLink>

            <NavLink
              to="/restaurant"
              className="text-white hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
            >
              The Restaurant
            </NavLink>

            <NavLink
              to="/chefs"
              className="text-white hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
            >
              Chefs
            </NavLink>

            <NavLink
              to="/philosophy"
              className="text-white hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
            >
              Our Philosophy
            </NavLink>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <NavLink
              to="/menu"
              className="text-white hover:text-brightColor no-underline transition-all cursor-pointer dark:text-white"
            >
              Our Dishes
            </NavLink>
            {/* <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a> */}
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="text-white no-underline hover:text-brightColor transition-all cursor-pointer"
              href="mailto:azukirestaurants@gmail.com"
            >
              azukirestaurants@gmail.com
            </a>

            <a
              className=" text-white no-underline hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              (11) 3258-2578
            </a>
            <a
              className=" text-white no-underline hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Azuki Restaurant</span> | All
            rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;

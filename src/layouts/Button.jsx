import React from "react";
import { Link } from "react-scroll";
const Button = (props) => {
  return (
    <div>
       <Link
        to={props.to} // Section ID to scroll to
        smooth={true} // Enables smooth scrolling
        duration={500} // Scrolling animation duration (in milliseconds)
        offset={props.offset || 0} // Optional: Adjust offset for alignment
        className="cursor-pointer"
      >
      <button className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
        {props.title}
      </button>
      </Link>
    </div>
  );
};

export default Button;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbart from "./Navbar";
import Footer from "./Footer";


const Azuki = () => {
  return (
    <div>
      <Navbart />

      <main className="p-0 m-0">
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Azuki;

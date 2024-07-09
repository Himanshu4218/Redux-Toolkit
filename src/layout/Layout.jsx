import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="container mt-10 px-5 mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

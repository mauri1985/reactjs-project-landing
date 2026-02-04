import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="lg:mt-20 mt-15">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

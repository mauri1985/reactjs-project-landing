import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-sky-50">
      <Navbar />
      <main className="max-w-screen-2xl mx-auto px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

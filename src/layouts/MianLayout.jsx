import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";

function MianLayout() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default MianLayout;

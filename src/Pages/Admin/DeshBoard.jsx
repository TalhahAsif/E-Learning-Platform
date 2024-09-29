import React from "react";
import { Outlet } from "react-router-dom";

const DeshBoard = () => {
  return (
    <>
      <div className="bg-red-600 p-10">This is deshBoard</div>
      <Outlet />
    </>
  );
};

export default DeshBoard;

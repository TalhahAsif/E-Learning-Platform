import React from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div>This is Main Page</div>
      <Outlet />
    </>
  );
};

export default MainPage;

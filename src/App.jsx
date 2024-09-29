import { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DeshBoard from "./Pages/Admin/DeshBoard";
import Users from "./Pages/Admin/Users";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import AdminCourses from "./Pages/Admin/AdminCourses";
import MainPage from "./Pages/LandingPages/MainPage";
import LandingPage from "./Pages/LandingPages/LandingPage";
import Courses from "./Pages/LandingPages/Courses";

function App() {
  const [user, setUser] = useState({ islogin: true, role: "admin" });

  const initialRoute = () => {
    if (user.islogin && user.role === "admin") {
      return <Navigate to={"/admin/users"} />;
    } else {
      return <Navigate to={"totc/main/home"} />;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={initialRoute()} />

          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />
          </Route>

          <Route
            path="/admin"
            element={
              user.islogin && user.role == "admin" ? (
                <DeshBoard />
              ) : (
                <Navigate to={"/"} />
              )
            }
          >
            <Route path="users" element={<Users />} />
            <Route path="AdminCourses" element={<AdminCourses />} />
          </Route>

          <Route path="/totc/main" element={<MainPage />}>
            <Route path="home" element={<LandingPage />} />
            <Route path="courses" element={<Courses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

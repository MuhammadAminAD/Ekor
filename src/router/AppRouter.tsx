import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "@/pages/Authentication";
import User from "@/pages/User";
import Spiker from "@/pages/Spiker";
import CoursePage from "@/pages/CoursePage";
import CourseInside from "@/pages/CourseInside";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<Authentication />} path="/auth" />
        <Route element={<Home />} path="/" />
        <Route element={<CoursePage />} path="/course" />
        <Route element={<User />} path="/user" />
        <Route element={<Spiker/>}  path="/spiker"/>
        <Route element={<CourseInside />} path="/cours-inside/:id" />
      </Routes>
    </>
  );
}

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "@/pages/Authentication";
import User from "@/pages/User";
import Spiker from "@/pages/Spiker";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<Authentication />} path="/auth" />
        <Route element={<Home />} path="/" />
        <Route element={<User />} path="/user" />
        <Route element={<Spiker/>}  path="/spiker"/>
      </Routes>
    </>
  );
}

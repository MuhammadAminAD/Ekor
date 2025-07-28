import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "@/pages/Authentication";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<Authentication />} path="/auth/sign-in/:step" />
        <Route element={<Authentication />} path="/auth/registration/:step" />
        <Route element={<Authentication />} path="/auth/restore-password/:step" />
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
}

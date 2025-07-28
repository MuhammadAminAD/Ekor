import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "@/pages/Authentication";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<Authentication />} path="/auth" />
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
}

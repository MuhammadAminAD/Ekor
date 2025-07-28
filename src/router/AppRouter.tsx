import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { styles } from "../styles/index.styles";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";

export default function AppRouter() {
  return (
    <>
    <div>
      <div className="w-full" >
        <Navbar/>
        <div className="flex gap-1">
          <div className="max-w-[240px] h-screen bg-[#F9F9F9] ">
            <Sidebar />
          </div>
          <div className={styles.Container}>
            <Routes>
              <Route element={<Home />} path="/" />
            </Routes>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

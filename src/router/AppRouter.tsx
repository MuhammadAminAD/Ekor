import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { styles } from "../styles/index.styles";
import Sidebar from "@/components/shared/Sidebar";

export default function AppRouter() {
  return (
    <>
    <div>
      <div className={styles.Container}>
        <div className="flex gap-1">
          <div className="max-w-[240px] max-h-[940px] ">
            <Sidebar />
          </div>
          <div className="w-full">
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

import { useSelector } from "react-redux";
import Navbar from "./components/shared/Navbar/Navbar";
import Sidebar from "./components/shared/Sidebar";
import AppRouter from "./router/AppRouter";
import { styles } from "./styles/index.styles";
import type { RootState } from "./app/store";
import { useLocation } from "react-router-dom";

export default function App() {
  const sidebarOpen = useSelector(
    (state: RootState) => state.SidebarSlice.isOpen
  );

  const sidebarWidth = sidebarOpen ? 240 : 100;
  const { pathname } = useLocation();
  const showSidebar = pathname === "/" ? true : sidebarOpen;

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[1111]">
        <Navbar />
      </div>

      <div className="flex">
        <div
          className={`transition-all duration-300 ease-in-out border-r border-[#D9D9D9] bg-[#F9F9F9] fixed z-40 top-[100px] left-0 h-[calc(100vh-100px)] ${
            sidebarOpen ? "w-[240px]" : "w-[100px]"
          } ${showSidebar ? "block" : "hidden"}`}
        >
          <Sidebar />
        </div>

        <div
          className={`${styles.Container} pt-[100px]`}
          style={{ marginLeft: `${sidebarWidth + 25}px` }}
        >
          <AppRouter />
        </div>
      </div>
    </>
  );
}

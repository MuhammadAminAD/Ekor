import { useSelector } from "react-redux";
import Navbar from "./components/shared/Navbar";
import Sidebar from "./components/shared/Sidebar";
import AppRouter from "./router/AppRouter";
import { styles } from "./styles/index.styles";
import type { RootState } from "./app/store";
import { useLocation } from "react-router-dom";
import FilterCategories from "./components/Navbar/FilterCategories";

export default function App() {
  const sidebarOpen = useSelector(
    (state: RootState) => state.SidebarSlice.isOpen
  );
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const sidebarWidth = sidebarOpen ? 240 : 100;

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[11]">
        <Navbar />
      </div>
      {isHome && (
        <div
          className="fixed top-[100px] right-0 z-10 bg-white border-b mb-[25px] border-gray-200"
          style={{
            left: `${sidebarWidth}px`,
            width: `calc(100% - ${sidebarWidth}px)`,
          }}
        >
          <FilterCategories />
        </div>
      )}



      {isHome || sidebarOpen ? (
        <div
          className={`transition-all duration-300 ease-in-out border-r border-[#D9D9D9] bg-[#F9F9F9] fixed z-40 top-[100px] left-0 h-[calc(100vh-100px)]`}
          style={{ width: `${sidebarWidth}px` }}
        >
          <Sidebar />
        </div>
      ) : null}

      <div
        className={`${styles.Container} transition-all duration-300 ${isHome ? "pt-[175px]" : "pt-[100px]"
          }`}
      >
        <div className="bg-white">
          <AppRouter />
        </div>
      </div>

    </>
  );
}

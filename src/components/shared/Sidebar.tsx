import type { RootState } from "@/app/store";
import { sideBar } from "@/constants/index.constanta";
import { setActiveSidebarTab } from "@/features/SidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(
    (state: RootState) => state.SidebarSlice.isOpen
  );

  const activeTab = useSelector(
    (state: RootState) => state.SidebarSlice.activeTab
  );
  return (
    <div
      className={`h-screen ${
        sidebarOpen ? "flex flex-col !justify-between pl-[30px]  pt-[20px]" : "px-[22px] pt-[26px]"
      }`}
    >
      <ul
        className={`flex flex-col gap-0 ${
          sidebarOpen ? "items-baseline " : "items-center"
        }`}
      >
        {sideBar.map(({ title, path, icon: Icon }) => (
          <li
            onClick={() => dispatch(setActiveSidebarTab(path))}
            key={title}
            className="pb-[30px]"
          >
            <Link
              to={path}
              className={`group font-medium leading-[100%] transition-colors ${
                sidebarOpen
                  ? "w-full flex gap-[10px] items-center justify-start text-[16px]"
                  : "w-[56px] flex flex-col items-center text-center text-[10px]"
              } ${
                activeTab === path
                  ? "text-[#006AFF]"
                  : "text-[#1C1C1C] hover:text-[#006AFF]"
              }`}
            >
              <Icon
                className={`w-6 h-6 stroke-current ${
                  activeTab === path
                    ? "text-[#006AFF]"
                    : "group-hover:text-[#006AFF]"
                } ${sidebarOpen ? "mb-0" : "mb-[10px]"}`}
              />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>

      {sidebarOpen && (
        <h3 className="flex items-end">© 2022 EduON LLC</h3>
        )}
    </div>
  );
};

export default Sidebar;

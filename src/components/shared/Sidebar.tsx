import { sideBar } from "@/constants/index.constanta";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="px-[23px] pt-[26px] border-r-[1px] border-[#D9D9D9] ">
      <ul className="flex flex-col items-center gap-0">
        {sideBar.map(({ title, path, icon: Icon }) => (
          <li key={title} className="pb-[30px]">
            <Link
              to={path}
              className="group max-w-[56px] flex flex-col items-center text-center font-medium text-[10px] leading-[100%] text-[#1C1C1C] hover:text-[#006AFF] transition-colors"
            >
              <Icon className="w-6 h-6 mb-[10px] stroke-current group-hover:text-[#006AFF]" />
              <span className="">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

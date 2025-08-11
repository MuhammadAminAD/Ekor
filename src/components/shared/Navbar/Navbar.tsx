import { styles } from "@/styles/index.styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/icons/logo.svg";
import cart from "@/assets/icons/shopping-cart.svg";
import Search from "./Search";
import Courses from "./Courses";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { setSidebarOpen } from "@/features/SidebarSlice";
import MenuIcon from "@/components/icons/MenuIcon";
import LangDropDown from "./LangDropDown";
import Filter from "./Filter";
import UserInfo from "./UserInfo";

const Navbar = () => {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/auth");
  };
  const navigateToSpiker = () => {
    navigate("/spiker");
  };
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(
    (state: RootState) => state.SidebarSlice.isOpen
  );
  const accessToken = useSelector(
    (state: RootState) => state.TokenSlice.token.accessToken
  );

  return (
    <div className="w-full flex lg:gap-[45px] gap-[20px]  items-center bg-[#F9F9F9] py-[25px] border-b-[1px] border-[#D9D9D9]">
      <button
        onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}
        className="w-[24px] ml-[38px] h-[24px] !bg-[transparent] cursor-pointer"
      >
        <MenuIcon isActive={sidebarOpen} />
      </button>
      <div
        className={`${styles.Container} flex items-center lg:gap-[42px] justify-between`}
      >
        <div className="flex lg:gap-[45px] gap-[20px] items-center">
          <Link to={"/"}>
            <img
              className="lg:w-[120px] lg:h-[34px] w-[108px] h-[30px] "
              src={logo}
              alt=""
            />
          </Link>

          <Courses />
          <Search />
        </div>
        <div className="flex items-center lg:gap-[30px] gap-[20px]">
          <Filter />
          {accessToken && (
            <div className="flex items-center gap-[40px]">
              <button className="font-medium text-[16px] text-[#1C1C1C] leading-[100%] cursor-pointer ">
                Edu branding
              </button>
              <button
                onClick={navigateToSpiker}
                className="font-medium text-[16px] text-[#1C1C1C] leading-[100%] cursor-pointer "
              >
                Spiker
              </button>
            </div>
          )}
          <button className="cursor-pointer">
            <img src={cart} alt="" />
          </button>
          <LangDropDown />

          {!accessToken && (
            <button
              onClick={navigateToSignIn}
              className={`${styles.BlueButton} flex items-center gap-[12px]`}
            >
              Boshlash
            </button>
          )}

          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

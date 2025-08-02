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
const Navbar = () => {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/auth");
  };
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(
    (state: RootState) => state.SidebarSlice.isOpen
  );
  return (
    <div className="w-full flex gap-[45px] items-center bg-[#F9F9F9] py-[25px] border-b-[1px] border-[#D9D9D9]">
      <button
        onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}
        className="w-[24px] ml-[38px] h-[24px] !bg-[transparent] cursor-pointer"
      >
        <MenuIcon isActive={sidebarOpen} />
      </button>
      <div className={`${styles.Container} flex items-center gap-[42px]`}>
        <div className="flex gap-[45px] items-center">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>

          <Courses />
        </div>
        <div>
          <Search />
        </div>
        <div className="flex items-center gap-[30px]">
          <button className="cursor-pointer">
            <img src={cart} alt="" />
          </button>

          <button
            onClick={navigateToSignIn}
            className={`${styles.BlueButton} flex items-center gap-[12px]`}
          >
            Boshlash
          </button>
          <Link to={'/user'}>Userni ko'rish</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

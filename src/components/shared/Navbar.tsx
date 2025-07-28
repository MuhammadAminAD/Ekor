import { styles } from "@/styles/index.styles";
import bars from "@/assets/icons/menu.svg";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/icons/logo.svg";
import book from "@/assets/icons/book.svg";
import cart from "@/assets/icons/shopping-cart.svg";
import Search from "./Search";
const Navbar = () => {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/auth");
  };
  return (
    <div className="w-full flex gap-[45px] items-center bg-[#F9F9F9] py-[25px] border-b-[1px] border-[#D9D9D9]">
      <button className="w-[24px] ml-[38px] h-[24px] !bg-[transparent] cursor-pointer">
        <img src={bars} alt="" />
      </button>
      <div className={`${styles.Container} flex items-center gap-[42px]`}>
        <div className="flex gap-[45px] items-center">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>

          <button
            className={`${styles.PrimaryButton} flex items-center gap-[12px] `}
          >
            <img src={book} alt="" />
            Kurslar
          </button>
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
            className={`${styles.PrimaryButton}`}
          >
            Boshlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { RootState } from "@/app/store";
import searchIcon from "@/assets/icons/search-normal.svg";
import { useSelector } from "react-redux";
const Search = () => {
  const accessToken = useSelector((state: RootState) => state.TokenSlice.token.accessToken);
  return (
    <form className="relative  " action="">
      <button
        className="absolute top-[50%] translate-y-[-50%] lg:left-[20px] 
        left-[50%] translate-x-[-50%]  w-[15px] h-[15px] cursor-pointer"
      >
        <img src={searchIcon} alt="" />
      </button>
      <input
        className={`border-[1px] border-[#D9D9D9] text-[#999999] text-[16px] font-medium leading-[100%] bg-white  w-[60px] rounded-[15px] lg:py-[16px] lg:pl-[55px] py-[13px] px-[21px] outline-none placeholder-transparent lg:placeholder-[#999999]
          ${accessToken ? "lg:w-[600px]" : "lg:w-[700px]"}
          `}
        type="text"
        placeholder="Qidirish..."
      />
    </form>
  );
};

export default Search;

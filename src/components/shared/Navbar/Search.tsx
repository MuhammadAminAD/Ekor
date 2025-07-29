import searchIcon from "@/assets/icons/search-normal.svg";
import filterIcon from "@/assets/icons/sort.svg";
const Search = () => {
  return (
    <div className="flex items-center gap-[30px] ">
      <form className="relative " action="">
        <button
          className="absolute top-[50%] translate-y-[-50%] lg:left-[20px] 
        left- [10px] cursor-pointer"
        >
          <img src={searchIcon} alt="" />
        </button>
        <input
          className="border-[1px] border-[#D9D9D9] text-[#999999] text-[16px] font-medium leading-[100%] bg-white lg:w-[700px] w-[70px] rounded-[15px] py-[16px] pl-[55px] outline-none "
          type="text"
          placeholder="Qidirish..."
        />
      </form>
        <button className="flex items-center gap-[15px] font-medium text-[#1C1C1C] text-[16px] leading-[100%] cursor-pointer">
          <img src={filterIcon} alt="" />
          Filter
        </button>
    </div>
  );
};

export default Search;

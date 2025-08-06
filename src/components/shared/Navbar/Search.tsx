import searchIcon from "@/assets/icons/search-normal.svg";
const Search = () => {
  return (
    <div className="flex items-center gap-[30px] ">
      <form className="relative " action="">
        <button
          className="absolute top-[50%] translate-y-[-50%] lg:left-[20px] 
        left-[50%] translate-x-[-50%]  w-[15px] h-[15px] cursor-pointer"
        >
          <img src={searchIcon} alt="" />
        </button>
        <input
          className="border-[1px] border-[#D9D9D9] text-[#999999] text-[16px] font-medium leading-[100%] bg-white lg:w-[700px] w-[60px] rounded-[15px] lg:py-[16px] lg:pl-[55px] py-[13px] px-[21px] outline-none placeholder-transparent lg:placeholder-[#999999]"
          type="text"
          placeholder="Qidirish..."
        />
      </form>
      
    </div>
  );
};

export default Search;

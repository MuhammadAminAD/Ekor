import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { styles } from "@/styles/index.styles";
import book from "@/assets/icons/book.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useGetFilterCategoriesQuery } from "@/services/FilterCategoriesService";
import { setCategories } from "@/features/FilterCategoriesSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const categories = useSelector(
    (state: RootState) => state.FilterCategoriesSlice.categories
  );

  const { data, isLoading } = useGetFilterCategoriesQuery();

  useEffect(() => {
    if (data?.data?.categories) {
      dispatch(setCategories(data.data.categories));
    }
  }, [data, dispatch]);

  const handleTitleClick = (title: string) => {
    setOpenPopover((prev) => (prev === title ? null : title));
  };

  const handleItemClick = () => {
    setDropdownOpen(false);
    setOpenPopover(null);
  };

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={`${styles.BlueButton} flex items-center justify-center gap-[10px]`}
        >
          <img src={book} alt="book icon" />
          Kurslar
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="start"
        className={cn(
          "bg-[#F9F9F9] w-[370px] rounded-[15px] border-none shadow-[0px_0px_10px_0px_#00000026] py-[20px] px-[30px]"
        )}
      >
        {isLoading ? (
          <p>Yuklanmoqda...</p>
        ) : (
          <ul className="flex flex-col">
            {categories.map((category) => (
              <li
                className="py-[12px] text-[#1C1C1C] text-[20px] font-medium leading-[100%]"
                key={category.id}
              >
                <Popover
                  open={openPopover === category.title}
                  onOpenChange={() => {}}
                >
                  <PopoverTrigger asChild>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => handleTitleClick(category.title)}
                    >
                      {category.title}
                      <img src={arrowRight} alt="arrow" />
                    </div>
                  </PopoverTrigger>

                  <PopoverContent
                    side="right"
                    align="center"
                    className={cn(
                      "bg-[#F9F9F9] w-[370px] rounded-[15px] border-none shadow-[0px_0px_10px_0px_#00000026] py-[20px] px-[30px] !top-0 !left-[30px] z-50"
                    )}
                  >
                    <ul className="flex flex-col">
                      {category.submenu?.map((item: any) => (
                        <li
                          className="py-[10px] cursor-pointer text-[#1C1C1C] text-[20px] font-medium leading-[100%]"
                          key={item.id}
                          onClick={handleItemClick}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </li>
            ))}
          </ul>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Courses;

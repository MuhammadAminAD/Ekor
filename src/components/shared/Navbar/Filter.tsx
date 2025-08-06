import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import filterIcon from "@/assets/icons/sort.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/app/store";
import {
  fetchFilterMenus,
  setSelectedFilter,
  clearFilters,
} from "@/features/FilterSlice";
import { cn } from "@/lib/utils";
import { FilterMenu, FilterType } from "@/types/filter.types";

const Filter = () => {
  const dispatch = useDispatch();
  const { menus, selected, loading } = useSelector(
    (state: RootState) => state.FilterSlice
  );

  useEffect(() => {
    dispatch(fetchFilterMenus() as any); // Agar thunk `AppDispatch` bilan tiplangan bo‘lsa, `as any` o‘rniga `useAppDispatch` ishlating
  }, [dispatch]);

  const handleFilterClick = (name: string, value: string) => {
    dispatch(setSelectedFilter({ name, value }));
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className={cn("outline-none")}>
          <button className="lg:flex hidden items-center gap-[15px] font-medium text-[#1C1C1C] text-[16px] leading-[100%] cursor-pointer">
            <img src={filterIcon} alt="filter icon" />
            Filter
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={cn(`w-[350px] rounded-[15px] p-[30px] bg-white `)}>
          {loading ? (
            <p>Yuklanmoqda...</p>
          ) : (
            <>
              {menus.map((item: FilterMenu, index: number) => (
                <div key={index} className="mb-3">
                  <p className="font-medium text-[#80B5FF] text-[20px] leading-[100%] mb-[20px]">
                    {item.name}
                  </p>

                  {(item.types || item.value)?.map((option: FilterType, id: number) => (
                    <div
                      key={id}
                      className={`text-sm ml-2 cursor-pointer ${
                        selected[item.name] === option.value
                          ? "text-black font-semibold"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleFilterClick(item.name, option.value)}
                    >
                      {option.title}
                    </div>
                  ))}
                </div>
              ))}

              {Object.keys(selected).length > 0 && (
                <button
                  onClick={() => dispatch(clearFilters())}
                  className="mt-2 text-sm text-red-500 underline"
                >
                  Filterni tozalash
                </button>
              )}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Filter;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import filterIcon from "@/assets/icons/sort.svg";
import arrowDown from "@/assets/icons/arrow-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    dispatch(fetchFilterMenus() as any);
  }, [dispatch]);

  const handleCheckboxChange = (name: string, value: string) => {
    dispatch(setSelectedFilter({ name, value }));
  };

  const toggleSection = (name: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
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

        <DropdownMenuContent
          sideOffset={45}
          className={cn(
            "w-[350px]  rounded-[15px] p-[30px] bg-white border-none shadow-[0_0_10px_0_#00000026] "
          )}
        >
          {loading ? (
            <p>Yuklanmoqda...</p>
          ) : (
            <>
              {menus.map((item: FilterMenu, index: number) => {
                const isExpanded = expandedSections[item.name];

                return (
                  <div key={index} className="mb-3">
                    <p
                      onClick={() => toggleSection(item.name)}
                      className="font-medium flex items-center justify-between text-[#80B5FF] text-[20px] leading-[100%] mb-[20px] cursor-pointer"
                    >
                      {item.name}
                      <img
                        src={arrowDown}
                        alt="arrow"
                        className={cn("transition-transform duration-200", {
                          "rotate-180": isExpanded,
                        })}
                      />
                    </p>

                    {isExpanded && (
                      <div className="flex flex-col gap-[12px] border-b-[1px] border-[#D9D9D9] pb-[20px]">
                        {(item.types || item.value)?.map(
                          (option: FilterType, id: number) => {
                            const isChecked =
                              selected[item.name] === option.value;

                            return (
                              <label
                                key={id}
                                className="flex items-center justify-between cursor-pointer text-[14px] leading-[150%] text-[#1C1C1C]"
                              >
                                <span>{option.title}</span>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() =>
                                    handleCheckboxChange(
                                      item.name,
                                      option.value
                                    )
                                  }
                                  className=" w-[24px] h-[24px]
                                            appearance-none
                                             border-[1.5px]
                                             rounded-[4px]
                                             bg-white
                                             border-[#1C1C1C]
                                             checked:border-[#006AFF]
                                             checked:text-[#006AFF]
                                               flex items-center justify-center
                                             checked:after:content-['✔']
                                             checked:after:text-[#006AFF]
                                             cursor-pointer
                                             "
                                />
                              </label>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {Object.keys(selected).length > 0 && (
                <button
                  onClick={() => dispatch(clearFilters())}
                  className="mt-2 flex w-[70%] mx-auto cursor-pointer  justify-center text-center text-[16px] text-[crimson]"
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

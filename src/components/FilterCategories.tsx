import { RootState } from "@/app/store";
import {
  setCategories,
  toggleCategory,
} from "@/features/FilterCategoriesSlice";
import { useGetFilterCategoriesQuery } from "@/services/FilterCategoriesService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FilterCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.FilterCategoriesSlice.categories
  );
  const selected = useSelector(
    (state: RootState) => state.FilterCategoriesSlice.selected
  );

  const { data, isLoading } = useGetFilterCategoriesQuery();

  useEffect(() => {
    if (data?.data?.categories) {
      dispatch(setCategories(data.data.categories));
    }
  }, [data, dispatch]);

  return (
    <div className="w-full py-[15px] px-[25px] bg-[#F9F9F9] border-b border-t border-[#D9D9D9]">
      {isLoading ? (
        <p>Yuklanmoqda...</p>
      ) : (
        <ul className="flex justify-between items-center">
          {categories.slice(0, 9).map((cat) => (
            <li
              key={cat.id}
              onClick={() => dispatch(toggleCategory(cat.id))}
              className={`text-[16px] font-medium text-[#1C1C1C] px-[16px] py-[8px] rounded-[15px] border-[1.5px] cursor-pointer transition hover:border-[#4391ff] hover:bg-[#80b5ff]
                ${
                  selected === cat.id
                    ? "border-[#4391ff] bg-[#80b5ff]"
                    : "border-[grey] bg-[#d9d9d9]"
                }`}
            >
              {cat.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterCategories;

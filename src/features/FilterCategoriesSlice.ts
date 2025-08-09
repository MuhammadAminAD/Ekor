import { FilterCategory } from "@/types/filter.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterCategoriesState {
  categories: FilterCategory[];
  selected: string | null; // faqat categoryId saqlanadi
  loading: boolean;
}

const initialState: FilterCategoriesState = {
  categories: [],
  selected: null,
  loading: false,
};

const FilterCategoriesSlice = createSlice({
  name: "FilterCategories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<FilterCategory[]>) => {
      state.categories = action.payload;
    },
    toggleCategory: (state, action: PayloadAction<string>) => {
      state.selected = state.selected === action.payload ? null : action.payload;
    },
    clearSelected: (state) => {
      state.selected = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCategories, toggleCategory, clearSelected, setLoading } =
  FilterCategoriesSlice.actions;

export default FilterCategoriesSlice.reducer;

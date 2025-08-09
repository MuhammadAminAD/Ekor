import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterMenu, FilterState } from "@/types/filter.types";

const initialState: FilterState = {
  menus: [],
  selected: {},
  loading: false,
};

const FilterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    setMenus: (state, action: PayloadAction<FilterMenu[]>) => {
      state.menus = action.payload;
    },
    toggleFilter: (
      state,
      action: PayloadAction<{ category: string; value: string }>
    ) => {
      const { category, value } = action.payload;
      if (state.selected[category] === value) {
        delete state.selected[category]; 
      } else {
        state.selected[category] = value; 
      }
    },
    clearFilters: (state) => {
      state.selected = {};
    }
  },
});

export const { setMenus, toggleFilter, clearFilters } =
  FilterSlice.actions;

export default FilterSlice.reducer;

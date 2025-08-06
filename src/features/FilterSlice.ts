import { FilterState } from "@/types/filter.types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: FilterState = {
  menus: [],
  selected: {},
  loading: false,
};

export const fetchFilterMenus = createAsyncThunk(
  "filters/fetchFilterMenus",
  async () => {
    const response = await fetch(
      "https://fintechedu-server.onrender.com/api/v1/filetr/filter-menus"
    );
    const data = await response.json();
    return data.data.categories;
  }
);

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedFilter: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state.selected[action.payload.name] = action.payload.value;
    },
    clearFilters: (state) => {
      state.selected = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilterMenus.fulfilled, (state, action) => {
        state.menus = action.payload;
        state.loading = false;
      })
      .addCase(fetchFilterMenus.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;

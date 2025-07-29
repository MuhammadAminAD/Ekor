import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
  activeTab: string;
}

const initialState: SidebarState = {
  isOpen: false,
  activeTab: "/", 
};

const SidebarSlice = createSlice({
  name: "Sidebar",
  initialState,
  reducers: {
    setActiveSidebarTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
})

export const { setActiveSidebarTab, setSidebarOpen } = SidebarSlice.actions;
export default SidebarSlice.reducer;

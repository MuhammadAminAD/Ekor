import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TabsList = "general" | "students" | "courses" | "finance" | "comments";
interface ITabsList {
    activeTabs: TabsList;
}
const initialState: ITabsList = {
 activeTabs : "general",
}
const SpikerTabsSlice = createSlice({
    name: "spikerTabs",
    initialState,
    reducers: {
        setTabs: (state, action: PayloadAction<TabsList>) => {
            state.activeTabs = action.payload
        }
    }
})  

export const { setTabs } = SpikerTabsSlice.actions;
export default SpikerTabsSlice.reducer;
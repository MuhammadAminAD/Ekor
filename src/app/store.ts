import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "@/features/AuthenticationSlice.ts";
import SidebarSlice from "@/features/SidebarSlice.ts";
import TokenSlice from "@/features/TokenSlice.ts";
import { baseApi } from "@/services/baseApi";
import SpikerTabsSlice from "@/features/SpiketTabsSlice.ts";
import FilterSlice from "@/features/FilterSlice"
import CoursesTabsSlice from '@/features/CoursesTabsSlice.ts'
export const store = configureStore({
      reducer: {
            FilterSlice: FilterSlice,
            AuthenticationSlice: AuthenticationSlice,
            SidebarSlice: SidebarSlice,
            TokenSlice: TokenSlice,
            SpikerTabsSlice: SpikerTabsSlice,
            CoursesTabsSlice: CoursesTabsSlice,
            [baseApi.reducerPath]: baseApi.reducer
      },

  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

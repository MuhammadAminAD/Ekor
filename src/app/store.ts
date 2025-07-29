import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "@/features/AuthenticationSlice.ts"
import SidebarSlice from "@/features/SidebarSlice.ts";
export const store = configureStore({
      reducer: {
            AuthenticationSlice: AuthenticationSlice,
            SidebarSlice: SidebarSlice,
      },

      middleware: (GetDefaultMiddleware) => GetDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

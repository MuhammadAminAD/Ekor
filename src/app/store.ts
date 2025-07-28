import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "@/features/AuthenticationSlice.ts"
export const store = configureStore({
      reducer: {
            AuthenticationSlice: AuthenticationSlice,
      },

      middleware: (GetDefaultMiddleware) => GetDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

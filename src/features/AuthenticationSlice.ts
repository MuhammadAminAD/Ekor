import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Pages = "sign-in" | "registration" | "reset-password";

interface AuthState {
      page: Pages;
      step: number;
      errors: { [key: string]: string | undefined };
      data: { [key: string]: string | undefined };
}

const initialState: AuthState = {
      page: "sign-in",
      step: 1,
      errors: {},
      data: {},
};

const AuthenticationSlice = createSlice({
      name: "Authentication",
      initialState,
      reducers: {
            setActiveAuthPage: (state, action: PayloadAction<Pages>) => {
                  state.page = action.payload;
                  state.step = 1;
                  state.errors = {};
                  state.data = {};
            },
            setActiveAuthStep: (state, action: PayloadAction<number>) => {
                  state.step = action.payload;
            },
            setAuthErrors: (state, action: PayloadAction<{ [key: string]: string | undefined }>) => {
                  state.errors = action.payload;
            },
            setAuthData: (state, action: PayloadAction<{ [key: string]: string | undefined }>) => {
                  state.data = action.payload;
            },
      },
});

export const {
      setActiveAuthPage,
      setActiveAuthStep,
      setAuthErrors,
      setAuthData,
} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;

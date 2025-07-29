import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type pages = "sign-in" | "registration" | "reset-password";

interface initilaState {
  page: pages;
  step: number;
}
const initialState: initilaState = {
  page: "sign-in",
  step: 1,
};

const AuthenticationSlice = createSlice({
      name: "Authentication",
      initialState: initialState,
      reducers: {
            setActiveAuthPage: (state, action: PayloadAction<pages>) => {
                  state.page = action.payload
                  state.step = 1
            },
            setActiveAuthStep: (state, action: PayloadAction<number>) => {
                  state.step = action.payload
            },
      }
})

export const { setActiveAuthPage, setActiveAuthStep } =
  AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;

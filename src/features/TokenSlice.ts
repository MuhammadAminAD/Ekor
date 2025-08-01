import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: {
    accessToken: string | null;
  };
}

const initialState: AuthState = {
  token: {
    accessToken: localStorage.getItem("token"),
  },
};

const TokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    removeToken: (state) => {
      state.token = { accessToken: null };
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, removeToken } = TokenSlice.actions;
export default TokenSlice.reducer;

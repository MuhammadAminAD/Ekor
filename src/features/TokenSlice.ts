import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: {
    accessToken: string | null;
  };
}

const initialState: AuthState = {
  token: {
    accessToken: localStorage.getItem("token") || "null",
  },
};

const TokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      const accessToken = action.payload.accessToken
      localStorage.setItem("token", accessToken);
    },
    removeToken: (state) => {
      state.token = { accessToken: null };
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, removeToken } = TokenSlice.actions;
export default TokenSlice.reducer;

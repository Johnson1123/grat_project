import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: localStorage.getItem("gartUser")
    ? JSON.parse(localStorage.getItem("gartUser"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("gartUser", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userData = null;
      localStorage.removeItem("gartUser");
    },
  },
});
export const { setUserData, logout } = authSlice.actions;
export default authSlice.reducer;

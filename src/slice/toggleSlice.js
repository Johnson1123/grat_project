import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: false,
  login: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.register = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});
export const { setRegister, setLogin } = toggleSlice.actions;
export default toggleSlice.reducer;

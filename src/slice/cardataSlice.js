import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carData: [],
};

const carData = createSlice({
  name: "carData",
  initialState,
  reducers: {
    setCarData: (state, action) => {
      state.carData = action.payload;
    },
  },
});

export const { setCarData } = carData.actions;
export default carData.reducer;

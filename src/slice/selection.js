import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepOne: "",
  stepTwo: "",
  stepThree: "",
  stepFour: "",
  stepFive: "",
  stepSix: "",
  stepSeven: "",
  stepEight: "",
  stepNine: "",
};

const multiSelection = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setOne: (state, action) => {
      state.stepOne = action.payload;
    },
    setTwo: (state, action) => {
      state.stepTwo = action.payload;
    },
    setThree: (state, action) => {
      state.stepThree = action.payload;
    },
    setFour: (state, action) => {
      state.stepFour = action.payload;
    },
    setFive: (state, action) => {
      state.stepFive = action.payload;
    },
    setSix: (state, action) => {
      state.stepSix = action.payload;
    },
    setSeven: (state, action) => {
      state.stepSeven = action.payload;
    },
    setEight: (state, action) => {
      state.stepEight = action.payload;
    },
    setNine: (state, action) => {
      state.stepNine = action.payload;
    },
  },
});

export const {
  setOne,
  setFive,
  setFour,
  setThree,
  setTwo,
  setSix,
  setEight,
  setSeven,
  setNine,
} = multiSelection.actions;
export default multiSelection.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: false,
  reducers: {
    darkmodeToggle: (state) => !state,
  },
});


export const {darkmodeToggle} = darkModeSlice.actions

export default darkModeSlice.reducer
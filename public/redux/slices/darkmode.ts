import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: false,
  reducers: {
    toggle: (state) => !state,
  },
});


export const {toggle} = darkModeSlice.actions

export default darkModeSlice.reducer
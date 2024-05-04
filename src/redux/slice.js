import { createSlice } from "@reduxjs/toolkit";
import { getPsychologist } from "./operetion";
const initialState = {
  psychologists: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleGetPsychologist = (state, action) => {
  console.log(action.payload);
  state.psychologists = action.payload;
};
const autoSlice = createSlice({
  name: "psychologists",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getPsychologist.pending, handlePending)
      .addCase(getPsychologist.fulfilled, handleGetPsychologist)
      .addCase(getPsychologist.rejected, handleRejected),
});

export const autoReducer = autoSlice.reducer;

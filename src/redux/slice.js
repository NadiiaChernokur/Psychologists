import { createSlice } from "@reduxjs/toolkit";
import { createUser, getPsychologist } from "./operetion";

const initialState = {
  psychologists: [],
  user: {},
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
  state.psychologists = action.payload;
};

const userCreate = (state, action) => {
  console.log(action.payload);
  state.user = action.payload;
};
const autoSlice = createSlice({
  name: "psychologists",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getPsychologist.pending, handlePending)
      .addCase(getPsychologist.fulfilled, handleGetPsychologist)
      .addCase(getPsychologist.rejected, handleRejected)
      .addCase(createUser.pending, handlePending)
      .addCase(createUser.fulfilled, userCreate)
      .addCase(createUser.rejected, handleRejected),
});

export const autoReducer = autoSlice.reducer;

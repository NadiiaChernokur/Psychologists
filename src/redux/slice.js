import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  getPsychologist,
  getPsychologistSort,
  login,
  updateArray,
  updateArrayAction,
} from "./operetion";

const initialState = {
  psychologists: [],
  user: {},
  psychologistsSort: [],
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
  state.isLoading = false;
  state.error = null;
  state.psychologists = action.payload;
};

const userCreate = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
};

const userLogin = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
};
const psychChoice = (state, action) => {
  console.log("555555555");
  state.isLoading = false;
  state.error = null;
  state.psychologistsSort = action.payload;
};
const update = (state, action) => {
  console.log("6666666666666");
  state.psychologistsSort = [];
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
      .addCase(createUser.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, userLogin)
      .addCase(login.rejected, handleRejected)
      .addCase(getPsychologistSort.pending, handlePending)
      .addCase(getPsychologistSort.fulfilled, psychChoice)
      .addCase(getPsychologistSort.rejected, handleRejected)
      .addCase(updateArray().type, update),
});

export const autoReducer = autoSlice.reducer;

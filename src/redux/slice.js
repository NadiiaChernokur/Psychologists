import { createSlice } from "@reduxjs/toolkit";
import {
  addFavorite,
  createUser,
  getPsychologist,
  getPsychologistSort,
  login,
  removeFavoriteItem,
  updateArray,
} from "./operetion";

const initialState = {
  psychologists: [],
  user: {},
  psychologistsSort: [],
  favoriteArray: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  console.log(action.payload);
  state.isLoading = false;
  state.error = action.payload;
};
const handleGetPsychologist = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.psychologists = action.payload;
};

const userCreate = (state, action) => {
  console.log(action.payload);
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
};

const userLogin = (state, action) => {
  console.log(action.payload);
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
};
const psychChoice = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.psychologistsSort = action.payload;
};
const update = (state, action) => {
  state.psychologistsSort = [];
};

const addFavoriteArrayFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favoriteArray.push(action.payload);

  // state.favoriteArray = [];
};
const removeFavoriteArrayFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favoriteArray = state.favoriteArray.filter(
    (el) => el.name !== action.payload
  );
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
      .addCase(updateArray().type, update)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, addFavoriteArrayFulfilled)
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(removeFavoriteItem().type, removeFavoriteArrayFulfilled),
});

export const autoReducer = autoSlice.reducer;

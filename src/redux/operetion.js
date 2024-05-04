import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyDckWQWECL9IMvRADUlAGifTcrRXWFzCyI",
  authDomain: "psychologists-22f26.firebaseapp.com",
  databaseURL:
    "https://psychologists-22f26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-22f26",
  storageBucket: "psychologists-22f26.appspot.com",
  messagingSenderId: "931627865163",
  appId: "1:931627865163:web:8b3ea51aa3d4b3743969ce",
  measurementId: "G-R9E8GRCFFB",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Отримання даних з бази даних
export const getPsychologists = async () => {
  try {
    const psychRef = ref(database);
    const snapshot = await get(psychRef);
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error getting data:", error);
  }
};

// Виклик функції для отримання даних
// getPsychologists();

export const getPsychologist = createAsyncThunk(
  "psychologists",
  async (page, thunkAPI) => {
    try {
      const psychRef = ref(database);
      const snapshot = await get(psychRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

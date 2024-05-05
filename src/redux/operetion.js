import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const firebaseConfig1 = {
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

const app1 = initializeApp(firebaseConfig1, "app1");
const database = getDatabase(app1);

const firebaseConfig2 = {
  apiKey: "AIzaSyBBRSIDcuZEamZAUDHOkk8C-KBAYh4CgUM",
  authDomain: "psychologist-7ca39.firebaseapp.com",
  projectId: "psychologist-7ca39",
  storageBucket: "psychologist-7ca39.appspot.com",
  messagingSenderId: "731245160647",
  appId: "1:731245160647:web:c9b69e0f0b3b72e72bf6e2",
  measurementId: "G-Z94C558Q6P",
};

const app2 = initializeApp(firebaseConfig2, "app2");
const userDatabase = getDatabase(app2);
const auth = getAuth(app2);

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

export const createUser = createAsyncThunk(
  "registration",
  async (data, thunkAPI) => {
    try {
      const { email, password, name } = data;
      const usersRef = ref(userDatabase, "users");
      const usersArray = await get(usersRef);
      const result = usersArray.val();

      Object.values(result).forEach((usemail) => {
        console.log(usemail.email);
        if (email === usemail.email) {
          throw new Error("This address already exists. Log in");
        }
      });
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const { accessToken, stsTokenManager } = user;
      const userId = user.uid;
      const userData = {
        name: name,
        email: user.email,
        accessToken: accessToken,
        refreshToken: stsTokenManager.refreshToken,
      };

      await set(ref(userDatabase, `users/${userId}`), userData);

      return { userId, ...userData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

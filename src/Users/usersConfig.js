// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// import "firebase/auth";
// import "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBBRSIDcuZEamZAUDHOkk8C-KBAYh4CgUM",
//   authDomain: "psychologist-7ca39.firebaseapp.com",
//   projectId: "psychologist-7ca39",
//   storageBucket: "psychologist-7ca39.appspot.com",
//   messagingSenderId: "731245160647",
//   appId: "1:731245160647:web:c9b69e0f0b3b72e72bf6e2",
//   measurementId: "G-Z94C558Q6P",
// };

// const app = initializeApp(firebaseConfig);
// const userDatabase = firebase.database();
// const auth = userDatabase.auth();

// export const createUser = createAsyncThunk(
//   "registration",
//   async ({ email, password }, thunkAPI) => {
//     console.log(email, password);
//     try {
//       await auth.createUserWithEmailAndPassword(email, password);
//       console.log("User registered successfully");
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const registration = createAsyncThunk(
//   "registr",
//   async (data, thunkAPI) => {
//     try {
//       userDatabase.ref("path/to/new/data").set({
//         key: "value",
//       });
//       console.log("Data added successfully");
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

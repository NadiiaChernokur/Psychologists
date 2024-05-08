import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  get,
  set,
  orderByKey,
  limitToFirst,
  query,
} from "firebase/database";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const getPsychologist = createAsyncThunk(
  "psychologists",
  async (page, thunkAPI) => {
    try {
      // const psychRef = ref(database, "/");
      // onValue(psychRef, (snapshot) => {
      //   const psychData = snapshot.val();
      //   console.log(psychData);
      //   const ratings = [];
      //   for (const key in psychData) {
      //     if (Object.hasOwnProperty.call(psychData, key)) {
      //       ratings.push(psychData[key].rating);
      //     }
      //   }
      //   console.log(ratings);
      // });
      const psychRef = ref(database, "/");
      const psycRef = query(psychRef, orderByKey(), limitToFirst(page));

      console.log(psycRef);
      const snapshot = await get(psycRef);
      console.log(snapshot.val());
      return snapshot.val();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPsychologistSort = createAsyncThunk(
  "psychsort",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const psychRef = await get(ref(database));
      const res = psychRef.val();
      console.log(res);
      const resCopy = Array.from(res);
      console.log(resCopy);

      switch (data) {
        case "A to Z":
          const alphabet = resCopy.sort((a, b) => {
            const nameA = a.name.replace("Dr. ", "");
            const nameB = b.name.replace("Dr. ", "");
            return nameA.localeCompare(nameB);
          });
          return alphabet;

        case "Z to A":
          const alphabetRev = resCopy.sort((a, b) => {
            const nameA = a.name.replace("Dr. ", "");
            const nameB = b.name.replace("Dr. ", "");
            return nameB.localeCompare(nameA);
          });
          return alphabetRev;

        case "Less than 10$":
          return resCopy.sort((a, b) => a.price_per_hour - b.price_per_hour);
        case "Greater than 10$":
          return resCopy.sort((a, b) => b.price_per_hour - a.price_per_hour);
        case "Popular":
          return resCopy.sort((a, b) => b.rating - a.rating);
        case "Not popular":
          return resCopy.sort((a, b) => a.rating - b.rating);
        case "Show all":
          return res;
        default:
          return res;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

export const createUser = createAsyncThunk(
  "registration",
  async (data, thunkAPI) => {
    try {
      const { email, password, name } = data;
      const usersRef = ref(userDatabase, "users");
      const usersArray = await get(usersRef);
      const result = usersArray.val();
      console.log(result);
      // if (result === null) {
      //   console.log("77777777");
      // }
      Object.values(result).forEach((usemail) => {
        if (email === usemail.email) {
          console.log("77777777");
          throw new Error("This address already exists. Log in");
        }
      });
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user);
      const { accessToken, stsTokenManager } = user;
      // localStorage.setItem(
      //   "tokenPsych",
      //   JSON.stringify({
      //     accessToken: accessToken,
      //     stsTokenManager: stsTokenManager,
      //   })
      // );
      const userId = user.uid;
      const userData = {
        name: name,
        email: user.email,
        password: password,
        accessToken: accessToken,
        refreshToken: stsTokenManager.refreshToken,
      };

      await set(ref(userDatabase, `users/${userId}`), userData);

      return { userId, ...userData };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("login", async (data, thunkAPI) => {
  try {
    const { email, password } = data;
    const usersRef = ref(userDatabase, "users");
    const usersArray = await get(usersRef);
    const result = usersArray.val();
    console.log(result);
    if (result === null) {
      console.log("errooooooooooooooooor");
      throw new Error("This e-mail address is not registered");
    }
    // Object.values(result).find((user) => {
    //   if (user.email === email) {
    //     console.log(email);
    //     console.log(user.email);
    //     const usPassword = user.password;
    //     if (usPassword !== password) {
    //       console.log(usPassword);
    //       throw new Error("Invalid password");
    //     }
    //   } else {
    //     throw new Error("This e-mail address is not registered");
    //   }
    // });
    const foundUser = Object.values(result).find(
      (user) => user.email === email
    );
    console.log(foundUser);
    if (!foundUser) {
      throw new Error("This e-mail address is not registered");
    }

    if (foundUser.password !== password) {
      throw new Error("Invalid password");
    }
    // const usPassword = user.password;
    // if (password !== usPassword) {
    //   console.log(usPassword);
    //   throw new Error("Invalid password");
    // }
    localStorage.setItem(
      "tokenPsych",
      JSON.stringify({
        accessToken: foundUser.accessToken,
        stsTokenManager: foundUser.stsTokenManager,
      })
    );
    return foundUser;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateArray = () => {
  return {
    type: "update",
    payload: [],
  };
};

export const addFavorite = createAsyncThunk(
  "addFavorite",
  async (name, thunkAPI) => {
    try {
      const psychRef = ref(database, "/");

      const snapshot = await get(psychRef);

      const selected = snapshot.val().find((el) => el.name === name);

      console.log(selected);
      return selected;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteItem = (name) => {
  return {
    type: "removeFavoriteItem",
    payload: name,
  };
};

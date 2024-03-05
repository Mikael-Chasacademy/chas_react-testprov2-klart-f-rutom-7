//ChatGPT###############################################
import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";

const store = configureStore({
  reducer: {
    question: questionReducer,
    // andra reducerfunktioner kan läggas till här vid behov
  },
});

export default store;
//ChatGPT###############################################

//ChatGPT###############################################
import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    question: "",
    answer: "",
  },
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
  },
});

export const { setQuestion, setAnswer } = questionSlice.actions;

export const selectQuestion = (state) => state.question.question;
export const selectAnswer = (state) => state.question.answer;

export default questionSlice.reducer;
//ChatGPT###############################################

//ChatGPT###############################################
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer, selectQuestion, selectAnswer } from "./questionSlice";

const AnswerComponent = () => {
  const dispatch = useDispatch();
  const question = useSelector(selectQuestion);
  const answer = useSelector(selectAnswer);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setAnswer(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h2>Fråga: {question}</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Svara på frågan</button>
      {answer && <h2>Svar: {answer}</h2>}
    </div>
  );
};

export default AnswerComponent;
//ChatGPT###############################################

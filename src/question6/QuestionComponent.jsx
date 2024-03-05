//ChatGPT###############################################
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "./questionSlice";

const QuestionComponent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setQuestion(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h2>Fråga:</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Skicka fråga</button>
    </div>
  );
};

export default QuestionComponent;
//ChatGPT###############################################

import { createContext, useState } from "react";
import data from "../database/questionAnswers.json";


const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [question, setQuestion] = useState(
    data.questions.filter(({ id }) => id === currentQuestion)
  );

  return (
    <LevelContext.Provider value={{
       currentQuestion, 
       setCurrentQuestion,
       question,
       setQuestion
       }}>
      {children}
    </LevelContext.Provider>
  );
};

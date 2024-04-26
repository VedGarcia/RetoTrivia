import { createContext, useEffect, useState } from "react";
import data from "../database/questionAnswers.json";


export const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  //Para guadar los  niveles de dificultad ya superados.
  const [currentQuestion, setCurrentQuestion] = useState(1);

  //Para mostrar  las preguntas y respuestas en curso.
  const [question, setQuestion] = useState(
    data.questions.filter(({ id }) => id === currentQuestion)
  );

  useEffect(()=>{
    setQuestion( data.questions.filter(({ id }) => id === currentQuestion))
  },[currentQuestion])

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

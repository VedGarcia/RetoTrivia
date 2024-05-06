import { createContext, useEffect, useState } from "react";
import data from "../database/questionAnswers.json";
import dataPrimary from "../database/questionPrimary.json";

export const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  //Para guadar los  niveles de dificultad ya superados.
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const level = ["primero", "segundo", "tercero", "cuarto", "quinto", "sexto"];
  //Para mostrar  las preguntas y respuestas en curso.
  const [question, setQuestion] = useState(
    dataPrimary.primero.filter(({ id }) => id === currentQuestion)
  );

  useEffect(() => {
    setQuestion(dataPrimary.primero.filter(({ id }) => id === currentQuestion));
  }, [currentQuestion]);

  return (
    <LevelContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        question,
        setQuestion,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};

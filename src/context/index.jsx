import { createContext, useEffect, useState } from "react";
import data from "../database/questionAnswers.json";
import dataPrimary from "../database/questionPrimary.json";

export const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  //Para guadar los  niveles de dificultad ya superados.
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const level = ["primero", "segundo", "tercero", "cuarto", "quinto", "sexto"];
  //Para mostrar  las preguntas y respuestas en curso.
  const [question, setQuestion] = useState(() => {
    const shuffledQuestions = dataPrimary.primero.sort(
      () => Math.random() - 0.5
    );
    return shuffledQuestions.find(({ id }) => id === currentQuestion);
  });

  useEffect(() => {
    const shuffledQuestions = dataPrimary.primero.sort(
      () => Math.random() - 0.5
    );
    setQuestion(shuffledQuestions.find(({ id }) => id === currentQuestion));
  }, [currentQuestion, dataPrimary.primero]);
  
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

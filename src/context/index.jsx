import { createContext, useState } from "react";

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(2);

  return (
    <LevelContext.Provider value={{ currentQuestion, setCurrentQuestion }}>
      {children}
    </LevelContext.Provider>
  );
};

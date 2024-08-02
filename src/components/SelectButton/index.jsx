import { Link } from "react-router-dom";
import { useContext } from "react";
import { LevelContext } from "../../context";

const SelectButton = ({ idResponse, children, correctResponse }) => {
  const { currentQuestion, setCurrentQuestion } = useContext(LevelContext);

  const isCorrect = idResponse === correctResponse;
  return (
    <>
      <Link
        to={isCorrect ? "/level-up" : "/game-over"}
        {...console.log(currentQuestion)}
        onClick={
          isCorrect
            ? () => setCurrentQuestion((prev)=>prev + 1)
            : () => setCurrentQuestion(((prev)=>prev = 1))
        }
        className="w-full h-18 border-4 border-purple-900 hover:shadow-xl hover: rounded-full grid place-content-center hover:bg-violet-200 bg-purple-100 p-4 text-3xl font-medium text-purple-900 transition-transform hover:scale-105"
      >
        {children}
      </Link>
    </>
  );
};
export default SelectButton;

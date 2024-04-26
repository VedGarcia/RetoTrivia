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
        className="hover:bg-purple-200 w-full h-18 border-4 border-purple-900 hover:shadow-xl hover:shadow-violet-500 rounded-full grid place-content-center bg-purple-100 p-4 text-3xl font-medium text-purple-900"
      >
        {children}
      </Link>
    </>
  );
};
export default SelectButton;

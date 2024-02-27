import { Fragment, useState } from "react";
import context from "../../context/index"
import Layout from "../../components/Layout/index";
import TextBox from "../../components/TextBox";
import SelectBox from "../../components/SelectBox";
import Logo from "../../components/Logo";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(2);
  const [question, setQuestion] = useState(
    data.questions.filter(({ id }) => id === currentQuestion)
  );

  return (
    <Layout>
      <Logo width={"w-2/6"} margin={"mb-10"} />
      <div className="w-screen">
        {question.map((question) => (
          <Fragment key={question.id}>
            <TextBox>{question.name}</TextBox>
            <SelectBox
              items={question.answers_possible}
              correctResponse={question.correct_answer}
            />
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};
export default Question;

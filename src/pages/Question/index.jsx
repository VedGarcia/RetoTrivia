import { Fragment, useEffect, useState } from "react";
import Layout from "../../components/Layout/index";
import TextBox from "../../components/TextBox";
import SelectBox from "../../components/SelectBox";
import data from "../../database/questionAnswers.json";
import Logo from "../../components/Logo/index";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [question, setQuestion] = useState(
    data.questions.filter(({ id }) => id === currentQuestion)
  );

  function onClick(answers) {
    console.log(answers);
  }
  return (
    <Layout>
      <div className="w-screen">
        {question.map((question) => (
          <Fragment key={question.id}>
            <TextBox>{question.name}</TextBox>
            <SelectBox onClick={onClick} items={question.answers_possible} />
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};
export default Question;

import React from "react";
import SingleQuestions from "./SingleQuestions";

const Questions = ({ questions, activeQuestion, togglequestion }) => {
  return (
    <section className="container">
      <h1>
        <span style={{ color: "yellow" }}>SpongeBob</span>-Themed Questions
      </h1>
      {questions.map((question) => {
        return (
          <SingleQuestions
            key={question.id}
            {...question}
            //show questions one by one
            activeQuestion={activeQuestion}
            togglequestion={togglequestion}
          />
        );
      })}
      {/* </div> */}
    </section>
  );
};

export default Questions;

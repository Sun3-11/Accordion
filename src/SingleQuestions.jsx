import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React from "react";
import { useState } from "react";
const SingleQuestions = ({
  id,
  title,
  info,
  activeQuestion,
  togglequestion,
}) => {
  //show questions one by one

  const isActive = id === activeQuestion;
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        {/* show questions one by one */}
        <button className="question-btn" onClick={() => togglequestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}

          {/* <button className="question-btn" onClick={() => setIsOpen(!isOpen)}> */}
          {/* {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
        </button>
      </header>
      {/* show questions one by one */}
      {isActive && <p>{info}</p>}
      {/* {isOpen && <p>{info}</p>} */}
    </article>
  );
};

export default SingleQuestions;

import data from "./data";
import Questions from "./Questions";
import React, { useState } from "react";
const App = () => {
  const [questions, setQuestion] = useState(data);
  //show questions one by one
  const [activeQuestion, setActiveQuestion] = useState(null);
  const togglequestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };
  const bubbleCount = 10; // add bubbles

  return (
    <main>
      {/* Bubbles */}
      <div className="bubbles-container">
        {[...Array(bubbleCount)].map((_, index) => (
          <div key={index} className="bubble"></div>
        ))}
      </div>
      <Questions
        questions={questions}
        activeQuestion={activeQuestion}
        togglequestion={togglequestion}
      />
    </main>
  );
};
export default App;

import { useEffect, useState } from "react";
import s from "./CandidateSummary.module.css";
export const CandidateSummary = ({ selectedQuestions }) => {
  const [answers, setAnswers] = useState([]);
  const [badAnswers, setBadAnswers] = useState([]);
  const [notUnderstandAnswers, setNotUnderstandAnswers] = useState([]);
  const [goodAnswers, setGoodAnswers] = useState([]);
  const [veryGoodAnswers, setVeryGoodAnswers] = useState([]);
  const toggleAnswer = (button, name, technology) => {
    const newAnswers = answers.filter((answer) => answer.name !== name);
    setAnswers(newAnswers);
    return setAnswers((prevValue) => [
      ...prevValue,
      { button, name, technology },
    ]);
  };
  useEffect(
    () => console.log(answers, badAnswers, goodAnswers),
    [toggleAnswer]
  );

  useEffect(() => {
    setBadAnswers(answers.filter((answer) => answer.button === "Bad"));
    setNotUnderstandAnswers(
      answers.filter((answer) => answer.button === "Not understand")
    );
    setGoodAnswers(answers.filter((answer) => answer.button === "Good"));
    setVeryGoodAnswers(
      answers.filter((answer) => answer.button === "Very good")
    );
  }, [answers]);

  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        {selectedQuestions.map((question, index) => (
          <div key={question.name}>
            <h3>
              {index + 1}. {question.name}
            </h3>
            <p>{question.answer}</p>
            <button
              onClick={() =>
                toggleAnswer("Bad", question.name, question.technology)
              }
            >
              Bad answer
            </button>
            <button
              onClick={() =>
                toggleAnswer(
                  "Not understand",
                  question.name,
                  question.technology
                )
              }
            >
              Not fully understand this question
            </button>
            <button
              onClick={() =>
                toggleAnswer("Good", question.name, question.technology)
              }
            >
              Good answer
            </button>
            <button
              onClick={() =>
                toggleAnswer("Very good", question.name, question.technology)
              }
            >
              Very good answer
            </button>
          </div>
        ))}
        <div>
          <p>Amount of answers: {answers.length}</p>
          <h3>Bad answers: {badAnswers.length}</h3>
          {badAnswers.map((answer) => (
            <p key={answer.name}>{answer.name}</p>
          ))}
          <h3>Not fully understand answers: {notUnderstandAnswers.length}</h3>
          {notUnderstandAnswers.map((answer) => (
            <p key={answer.name}>{answer.name}</p>
          ))}
          <h3>Good answers: {goodAnswers.length}</h3>
          {goodAnswers.map((answer) => (
            <p key={answer.name}>{answer.name}</p>
          ))}
          <h3>Very good answers: {veryGoodAnswers.length}</h3>
          {veryGoodAnswers.map((answer) => (
            <p key={answer.name}>{answer.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

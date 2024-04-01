import React, { useState, useEffect } from "react";
import styled from "styled-components";
import test from "../assets/question.json";

const QuestionsPerPage = 5;

function MvtiQuestion() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [scores, setScores] = useState({});

  useEffect(() => {
    const questions = test.questions.flatMap((category) => category.questions);
    const start = currentPage * QuestionsPerPage;
    const current = questions.slice(start, start + QuestionsPerPage);
    setCurrentQuestions(current);
  }, [currentPage]);

  const handleScoreChange = (question, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [question]: score,
    }));
  };

  return (
    <div>
      {currentQuestions.map((question, index) => (
        <QuestionWrapper key={index}>
          <div>{question}</div>
          <ScoreSelector>
            {[1, 2, 3, 4, 5].map((score) => (
              <ScoreButton
                key={score}
                score={score}
                className={scores[question] === String(score) ? "selected" : ""}
                onClick={() => handleScoreChange(question, String(score))}
              ></ScoreButton>
            ))}
          </ScoreSelector>
        </QuestionWrapper>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={
          (currentPage + 1) * QuestionsPerPage >=
          test.questions.flatMap((category) => category.questions).length
        }
      >
        Next
      </button>
    </div>
  );
}

export default MvtiQuestion;
const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

const ScoreSelector = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  align-content: center;
  align-items: center;
`;

const ScoreButton = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  border-style: solid; /* 여기에 테두리 스타일을 추가합니다 */
  border-width: 3px;
  border-color: #745fe2;
  transition: background-color 0.3s;
  width: ${({ score }) => 20 * score}px;
  height: ${({ score }) => 20 * score}px;
  &:hover {
    background-color: #dedede;
  }
  &.selected {
    background-color: #4caf50;
    color: white;
  }
`;

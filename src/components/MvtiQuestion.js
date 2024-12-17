import React, { useState, useEffect } from "react";
import styled from "styled-components";
import test from "../assets/question.json";

const QuestionsPerPage = 6;

function MvtiQuestion() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [scores, setScores] = useState({});
  const [typeScores, setTypeScores] = useState({}); // 타입별 점수 계산
  const [showResult, setShowResult] = useState(false);

  // 현재 페이지 질문 설정
  useEffect(() => {
    const questions = test.questions;
    const start = currentPage * QuestionsPerPage;
    const current = questions.slice(start, start + QuestionsPerPage);
    setCurrentQuestions(current);
  }, [currentPage]);
  // 점수 업데이트 및 타입별 점수 누적 계산
  const handleScoreChange = (question, score, type) => {
    setScores((prevScores) => ({
      ...prevScores,
      [question]: score,
    }));

    setTypeScores((prevTypeScores) => ({
      ...prevTypeScores,
      [type]: (prevTypeScores[type] || 0) + score,
    }));
  };

  return (
    <Container>
      <QuestionContainer>
        {currentQuestions.map((questionObj, index) => (
          <QuestionWrapper key={index}>
            <QuestionText>
              {currentPage * QuestionsPerPage + index + 1}.{" "}
              {questionObj.question}
            </QuestionText>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <ScoreSelector style={{ paddingLeft: 20 }}>
                  {[-4, -3, -2, -1].map((score) => (
                    <ScoreButton
                      key={score}
                      onClick={() =>
                        handleScoreChange(
                          questionObj.id,
                          score,
                          questionObj.type
                        )
                      }
                    >
                      <Circle
                        score={-score}
                        direction="left"
                        className={
                          scores[questionObj.id] === score ? "selected" : ""
                        }
                      ></Circle>
                    </ScoreButton>
                  ))}
                </ScoreSelector>

                <ScoreButtonCenter
                  key={0}
                  onClick={() =>
                    handleScoreChange(questionObj.id, 0, questionObj.type)
                  }
                >
                  <Circle
                    score={0}
                    direction="center"
                    className={scores[questionObj.id] === "0" ? "selected" : ""}
                  ></Circle>
                </ScoreButtonCenter>
                <ScoreSelector style={{ paddingRight: 20 }}>
                  {[1, 2, 3, 4].map((score) => (
                    <ScoreButton
                      key={score}
                      onClick={() =>
                        handleScoreChange(
                          questionObj.id,
                          score,
                          questionObj.type
                        )
                      }
                    >
                      <Circle
                        score={score}
                        direction="right"
                        className={
                          scores[questionObj.id] === score ? "selected" : ""
                        }
                      ></Circle>
                    </ScoreButton>
                  ))}
                </ScoreSelector>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <div style={{ fontSize: 10, padding: 10 }}>그렇지 않다</div>
                <div style={{ fontSize: 10, padding: 10 }}>그렇다</div>
              </div>
            </div>
          </QuestionWrapper>
        ))}
      </QuestionContainer>
      <Navigation>
        <NavButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </NavButton>
        <PageIndicator>
          Page {currentPage + 1} of{" "}
          {Math.ceil(
            test.questions.flatMap((category) => category.questions).length /
              QuestionsPerPage
          )}
        </PageIndicator>
        <NavButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            (currentPage + 1) * QuestionsPerPage >=
            test.questions.flatMap((category) => category.questions).length
          }
        >
          Next
        </NavButton>
      </Navigation>
    </Container>
  );
}

export default MvtiQuestion;

// 스타일 정의
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const QuestionContainer = styled.div`
  margin: 20px 0;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const ScoreSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* 버튼 간의 간격 설정 */
  margin: 10px 0; /* 위아래 간격 설정 */
`;
const ScoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 20px; /* 버튼의 고정 크기 (절반으로 줄임) */
  height: 20px; /* 버튼의 고정 크기 (절반으로 줄임) */
  position: relative;
  transition: all 0.3s;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 10px; /* 원의 기본 크기 (절반으로 줄임) */
  height: 10px; /* 원의 기본 크기 (절반으로 줄임) */
  background-color: ${({ className, direction }) =>
    className === "selected"
      ? direction === "left"
        ? "#E1E428"
        : "#C9B2DF"
      : "#fff"}; /* 선택 시 검은색 */
  border: 2px solid
    ${({ direction }) => (direction === "left" ? "#E1E428" : "#C9B2DF")};
  color: ${({ className }) => (className === "selected" ? "#fff" : "#333")};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(
    ${({ score }) => 1 + (score - 1) * 0.2}
  ); /* 점점 커지도록 설정 */
  transition: transform 0.3s;
`;

const ScoreButtonCenter = styled(ScoreButton)`
  border-color: #333;
  background-color: ${({ className }) =>
    className === "selected" ? "#000" : "#fafafa"}; /* 선택 시 검은색 */

  color: #333;
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const NavButton = styled.button`
  background-color: #745fe2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #563db8;
  }
`;

const PageIndicator = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;

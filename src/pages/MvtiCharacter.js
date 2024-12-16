import React, { useState, useEffect } from "react";
import styled from "styled-components";

// MVTI 데이터
const MVTI_TYPES = [
  { id: "ENTP", name: "대중적인 창의적 탐험가" },
  { id: "INFJ", name: "감성의 스토리텔러" },
  { id: "ESTJ", name: "현실의 설계자" },
  { id: "ISFP", name: "감성의 미로 탐험가" },
  { id: "ENFJ", name: "희망의 전도사" },
  { id: "INTJ", name: "차가운 전략가" },
  { id: "ESFP", name: "감성의 스릴러러" },
  { id: "INTP", name: "논리적 상상가" },
];

function MvtiCharacter() {
  const [modalData, setModalData] = useState(null);
  const [recommendations, setRecommendations] = useState({});

  useEffect(() => {
    // JSON 파일에서 추천 영화 데이터를 가져옵니다.
    fetch("/data/mvti_recommendations.json")
      .then((response) => response.json())
      .then((data) => setRecommendations(data))
      .catch((error) => console.error("JSON 데이터 불러오기 실패:", error));
  }, []);

  const openModal = (type) => {
    setModalData({
      type: type.id,
      name: type.name,
      description: recommendations[type.id]?.description || "정보가 없습니다.",
      movies: recommendations[type.id]?.movies || [],
    });
  };

  const closeModal = () => setModalData(null);

  return (
    <AppContainer>
      <Title>Movie + MBTI = MVTI 😊</Title>
      <CardGrid>
        {MVTI_TYPES.map((type) => (
          <Card key={type.id} onClick={() => openModal(type)}>
            <CardImage
              src={`https://assets.movie-hop.com/mvti/mvti/${type.id.toLocaleLowerCase()}.webp`}
              alt={type.name}
            />
            <CardTitle>{type.name}</CardTitle>
          </Card>
        ))}
      </CardGrid>

      {/* 모달 */}
      {modalData && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{modalData.name}</ModalTitle>
            <p>{modalData.description}</p>
            <h4>추천 영화</h4>
            <MovieList>
              {modalData.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </MovieList>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </AppContainer>
  );
}

export default MvtiCharacter;

// Styled-components 정의
const AppContainer = styled.div`
  text-align: center;
  background-color: #fef8e6;
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #ff7f50;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px auto;
  max-width: 1200px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  padding: 10px 0;
  font-size: 1.1em;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 10px;
`;

const MovieList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 5px 0;
  }
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ff7f50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff6347;
  }
`;

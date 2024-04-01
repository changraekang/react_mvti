import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import main from "../assets/images/main.png";

import MvtiQuestion from "../components/MvtiQuestion";

function MvtiTest() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Image src={logo} alt="main" width="55px" />
        <Title>영화성향 파악하기</Title>
      </TitleWrapper>
      <Header>Movie + MBTI = MVTI😁</Header>
      <ImageWrapper>
        <Image src={main} alt="main" />
        <Image src={main} alt="main" />
        <Image src={main} alt="main" />
      </ImageWrapper>
      <MvtiQuestion></MvtiQuestion>
    </Wrapper>
  );
}

export default MvtiTest;
const Wrapper = styled.div`
  min-height: 80vh;
  width: 100%;
  overflow: hidden; // 스크롤을 숨깁니다.
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "SCDream2";
  font-size: 50px;
  background-color: #fff1cc;
`;
const ImageWrapper = styled.div`
  width: 100%; // 너비 설정
  height: 300px; // 높이 설정
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const Image = styled.img`
  width: ${(props) => props.width || "200px"};
  padding-right: 4px; // padding-right 대신 margin-right 사용
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const Title = styled.div`
  flex-grow: 1; // 타이틀이 남은 공간을 모두 차지하도록 설정
  display: flex;
  align-items: center; // 수직 중앙 정렬
  justify-content: flex-start; // 수평 중앙 정렬
  font-family: "SCDream6";
  font-size: 30px;
`;
const Header = styled.div`
  width: 100%;
  overflow: hidden; // 스크롤을 숨깁니다.
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "SCDream2";
  font-size: 20px;
`;

const Button = styled.button`
  width: 220px;
  height: 54px;
  margin-top: 20px;
  background: #f8e6ff; /* 밝은 보라색 배경 */
  border-radius: 28px; /* 둥근 모서리 */
  border: 2px solid transparent; /* 테두리 설정 */
  color: #5d3f6a; /* 버튼 내 텍스트 색상 */
  font-size: 16px; /* 텍스트 크기 */
  font-weight: bold; /* 텍스트 굵기 */
  cursor: pointer; /* 마우스 오버 시 커서 변경 */
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 박스 그림자 효과 */
`;

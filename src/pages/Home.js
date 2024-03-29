import React from "react";
import main from "../assets/images/main.png";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div>영화성향 파악하기</div>
      <div>Movie + MBTI = MVTI😁</div>
      <ImageWrapper>
        <img src={main} alt="main" />{" "}
      </ImageWrapper>
    </Wrapper>
  );
}

export default Home;
const Wrapper = styled.div`
  min-height: 80vh;
  width: 100%;
  overflow: hidden; // 스크롤을 숨깁니다.
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "SCDream2";
  font-size: 50px;
`;
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

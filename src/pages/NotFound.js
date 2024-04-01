import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import notfound from "../assets/images/notfound.jpg";

function NotFound() {
  const navigate = useNavigate();

  const handleGoPrevpage = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleGoHome = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <Section>
      <Box>
        <Img alt="" src={notfound} />
        <div>
          <Text>
            404
            <br></br>
            NOT FOUND
          </Text>
          <Text2>
            더 이상 페이지를 찾을 수 없어요😢 <br></br>주소가 잘못되거나 삭제된
            페이지입니다.
          </Text2>
        </div>
      </Box>
    </Section>
  );
}

export default NotFound;

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: "SCDream9";
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 72px;
`;

const Text2 = styled.p`
  font-weight: 700;
  font-size: 32px;
  margin-top: 8px;
`;

const Img = styled.img`
  width: 600px;
  padding: 10px;
`;

const WrapButtons = styled.button`
  display: flex;
  width: 100%;
  gap: 24px;
`;

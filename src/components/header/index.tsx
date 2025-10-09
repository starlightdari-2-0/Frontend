"use client";

import Image from "next/image";
import back from "/public/goBack.svg";
import styled from "styled-components";
import { useRouter } from "next/navigation";

// 헤더 제목, 뒤로가기 버튼 클릭 시 이동할 주소를 외부에서 받음
interface HeaderProps {
  title?: string;
  backUrl?: string;
}

const Header = ({ title, backUrl }: HeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (backUrl) {
      router.push(backUrl);
    } else {
      router.back();
    }
  };

  return (
    <Container>
      <BackButton
        src={back}
        alt="go back"
        onClick={handleBack}
      />
      {title && <Title>{title}</Title>}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #1F2027;
  position: relative;
  display: flex;
  align-items: center;
  width: 360px;
  height: 60px;
`;

const BackButton = styled(Image)`
  position: absolute;
  left: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: Pretendard;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #D9E0ED;
`;

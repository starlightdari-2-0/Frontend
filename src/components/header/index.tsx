"use client";

import Image from "next/image";
import back from "/public/goBack.svg";
import styled from "styled-components";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title?: string; // 헤더 제목을 외부에서 받음
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <Container>
      <BackButton
        src={back}
        alt="go back"
        onClick={() => router.back()}
      />
      {title && <Title>{title}</Title>}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 328px;
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

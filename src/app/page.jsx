"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import KakaoLoginButton from "../components/kakaoLoginButton";
import logo from "/public/logo.svg";
import starlight from "/public/starlight.svg";


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setSplashFading(true);

      const t2 = setTimeout(() => {
        setShowSplash(false);
      }, 600);

      return () => clearTimeout(t2);
    }, 2000);

    return () => clearTimeout(t1);
  }, []);

  return (
    <Container>
      <Image alt="logo" src={logo} />

      {showSplash ? (
        <SplashBox fadeOut={splashFading}>
          <Image alt="logo" src={starlight} />
        </SplashBox >
      ) : (
        <>
          <FadeBox>
            반려동물과 함께한 추억들을 <br /> 별자리로 만들어보세요!
          </FadeBox>
          <KakaoLoginButton />
        </>
      )}
    </Container>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-8px); }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background: linear-gradient(to bottom, #1C2352, #101014);
  position: relative;
`;

const SplashBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.6s ease;

  ${(p) =>
    p.fadeOut &&
    css`
      animation: ${fadeOut} 0.6s ease forwards;
    `}
`;

const FadeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.6s ease;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #AFCBFB;
  transition: opacity 0.45s ease, transform 0.45s ease;
`;
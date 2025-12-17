"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import kakao from "/public/kakao-login.svg";


const KakaoLoginButton = () => {
  const [isShown, setIsShown] = useState(false);
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
  const Rest_api_key = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

  const redirect_uri = `${server_url}/auth/kakao/callback`;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Button onClick={handleLogin} className={isShown ? 'show' : ''}>
      <Image src={kakao} alt="" />
      카카오로 계속하기
    </Button>
  );
};

const Button = styled.button`
  width: 328px;
  height: 52px;
  display: flex;
  justify-content: center;
  gap: 12px;
  white-space: nowrap;
  padding: 14px 20px;
  border-radius: 10px;
  color: #000000;
  background-color: #fee500;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;

  transition: opacity 0.85s ease-out, transform 0.85s ease-out;
  transition-delay: 0.25s;
  opacity: 0;
  transform: translateY(20px);
  
  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default KakaoLoginButton;

import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 328px;
  min-width: 328px;
  max-width: 767px;
  align-items: center;
  position: relative;
  padding-right: 16px;
  padding-bottom: 40px;
  padding-left: 16px;
  margin: auto;
`;

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const FadeWrapper = styled.div`
  animation: ${slideIn} 0.6s ease-out forwards;
`;
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const Modal = styled.div`
  background: #3C424B;
  border-radius: 16px;
  width: 400px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;
  color: #E5ECF8;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -63px;
`;

export const Content = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #A5B4C5;
`;

export const Footer = styled.div`
  justify-content: space-between;
  display: flex;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #A5B4C5;
`;
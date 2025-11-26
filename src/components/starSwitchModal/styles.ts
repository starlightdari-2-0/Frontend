import styled from "styled-components";

export const StarModalBackdrop = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  //   z-index: 1000;
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StarModalCard = styled.div`
  width: 268px;
  height: 468px;
  border-radius: 20px;
  padding: 20px 16px;
  background: #3c424b;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -60px;
`;
"use client";
import styled from "styled-components";

interface BaseModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function BaseModal({ children, onClose }: BaseModalProps) {
  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>{children}</ModalBox>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #2b2d31;
  color: white;
  padding: 16px;
  border-radius: 20px;
  width: 268px;
  height: 120px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
`;


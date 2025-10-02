"use client";

import BaseModal from "./BaseModal";
import styled from "styled-components";

interface CommonModalProps {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function CommonModal({
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: CommonModalProps) {
  return (
    <BaseModal onClose={onCancel || (() => { })}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <ButtonRow>
        {cancelText && <button onClick={onCancel}>{cancelText}</button>}
        {confirmText && <button onClick={onConfirm}>{confirmText}</button>}
      </ButtonRow>
    </BaseModal>
  );
}

const Title = styled.h3`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #E5ECF8;
`

const Description = styled.p`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #A5B4C5;
  margin-top: 8px;
`

const ButtonRow = styled.div`
  display: flex;
  gap: 11px;
  margin-top: 16px;

  button {
    padding: 10.5px 14px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background: #5D636F;
    color: #D9E0ED;
    width: 128.5px;
  }

  button:last-child {
    background: #AFCBFB;
    color: #1F2027;
  }
`;

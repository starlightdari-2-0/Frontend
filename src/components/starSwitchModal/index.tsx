import React, { useState } from 'react';
import Image from "next/image";
import close from "/public/modal_close.svg";
import { StarItemData } from '../../types/starItem';
import { StarHeader } from '../starHeader';
import { StarList } from '../starList';
import { CloseButton, Container, StarModalBackdrop, StarModalCard } from './styles';

export function StarSwitchModal({ open, onClose }: { open: boolean; onClose: () => void }) {

  // --- 로컬 더미 데이터 ---
  const current: StarItemData = { id: "s0", name: "콩이 자리", pet_svg: "#6c89c8" };
  const items: StarItemData[] = [
    { id: "s1", name: "별이 자리", pet_svg: "#e4a77e" },
    { id: "s2", name: "콩이 자리", pet_svg: "#6c89c8" },
    { id: "s3", name: "달이 자리", pet_svg: "#e9eef6" },
  ];
  // -------------------------

  const handleItemClick = (data: StarItemData) => {
    console.log(`별자리 선택: ${data.name}`);
    // 실제 로직: 별자리 전환 처리
    onClose();
  };

  return (
    <StarModalBackdrop open={open}>
      <Container>
        <CloseButton onClick={onClose}><Image src={close} alt="close" /></CloseButton>
        <StarModalCard>
          <StarHeader current={current} />
          <StarList items={items} onItemClick={handleItemClick} />
        </StarModalCard>
      </Container>
    </StarModalBackdrop>
  );
}

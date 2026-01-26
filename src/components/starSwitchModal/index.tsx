import React, { useEffect, useState } from 'react';
import Image from "next/image";
import close from "/public/modal_close.svg";
import { StarItemData } from '../../types/starItem';
import { StarHeader } from '../starHeader';
import { StarList } from '../starList';
import { CloseButton, Container, StarModalBackdrop, StarModalCard } from './styles';
import axios from 'axios';

export function StarSwitchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [items, setItems] = useState<StarItemData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const current = items.find(item => item.id === "현재_ID") || items[0];

  useEffect(() => {
    if (open) {
      fetchConstellations();
    }
  }, [open]);

  const fetchConstellations = async () => {
    try {
      setIsLoading(true);
      const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
      const response = await axios.get(`${server_url}/pets`, {
        withCredentials: true,
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });

      // API 응답 데이터를 StarItemData 형식에 맞게 매핑
      const mappedData: StarItemData[] = response.data.map((pet: any) => ({
        id: pet.pet_id,
        name: pet.pet_name,
        pet_svg: pet.pet_img,
      }));

      setItems(mappedData);
      setIsError(false);
    } catch (error) {
      console.error("별자리 데이터 로드 실패:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleItemClick = (data: StarItemData) => {
    console.log(`별자리 선택: ${data.name}`);
    // 실제 로직: 별자리 전환 처리
    onClose();
  };

  if (!open) return null;

  return (
    <StarModalBackdrop open={open}>
      <Container>
        <CloseButton onClick={onClose}><Image src={close} alt="close" /></CloseButton>
        <StarModalCard>
          {isLoading ? (
            <p>로딩 중...</p>
          ) : isError ? (
            <p>데이터를 불러오는 데 실패했습니다.</p>
          ) : (
            <>
              {current && <StarHeader current={current} />}
              <StarList items={items} onItemClick={handleItemClick} />
            </>
          )}
        </StarModalCard>
      </Container>
    </StarModalBackdrop>
  );
}

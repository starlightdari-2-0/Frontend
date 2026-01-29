import styled from "styled-components";
import Image from "next/image";

export const List = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;

  /* 스크롤바 숨김 (선택 사항) */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const Card = styled.div`
  background: #2A2F39;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 111px;
  height: 156px;
  border-radius: 16px;
  gap: 12px;
  opacity: 1;
  padding: 12px;
`;

export const PetImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background: gray;
  margin: 0 auto;
  object-fit: cover;
`;

export const Label = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #D9E0ED;
`;

export const Name = styled(Label)`
  margin-top: 6px;
`;

export const Count = styled.div`
  margin-top: 4px;
  color: #E5ECF8;
  background-color: #3C424B;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95px;
  height: 21px;
  border-radius: 8px;
  gap: 8px;
  opacity: 1;
  padding: 8px;
  justify-content: center;

  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
`;

export const AddCard = styled(Card)`
  justify-content: center;
`;

export const Plus = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

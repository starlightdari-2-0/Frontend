import styled from "styled-components";
import Image from "next/image";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 0;
`;

export const PetAvatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 999px;
`;

export const PetName = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #D9E0ED;
`;

export const InfoBtn = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  background-color: #5d636f;
  width: 148px;
  height: 32px;
  border-radius: 8px;
  padding: 4px 10px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #d9e0ed;
  white-space: nowrap;
`;
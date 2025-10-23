import styled from "styled-components";
import Image from "next/image";

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  border-bottom: 1px solid #2A2F39;
  cursor: pointer;
  height: 70px;
  padding: 16px 0;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin-bottom: 0.25rem;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #A5B4C5;
`;

export const Meta = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #7D8799;
`;

export const SubMeta = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #7D8799;
  margin-top: 0.5rem;
  display: flex;
  gap: 12px;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ContentImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;

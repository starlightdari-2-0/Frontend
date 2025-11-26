import styled from "styled-components";
import Image from "next/image";

export const ItemLi = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
`;

export const ItemImg = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 999px;
`;

export const ItemName = styled.div`
  font-weight: 600;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #d9e0ed;
`;

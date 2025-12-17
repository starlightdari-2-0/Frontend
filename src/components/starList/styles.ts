import styled from "styled-components";

export const ListUL = styled.ul`
  list-style: none;
  display: grid;
`;

export const AddLi = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
`;

export const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
`;

export const AddText = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #d9e0ed;
  cursor: pointer;
`;

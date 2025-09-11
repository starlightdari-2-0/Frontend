import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  background: #2A2F39;
  width: calc(100% - 18px);
  height: 53px;
  justify-content: space-between;
  opacity: 1;
  padding: 20px 9px;
  border-radius: 16px;
`;

export const MenuItem = styled.div<{ isLast?: boolean }>`
  flex: 1;
  color: #D9E0ED;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  cursor: pointer;

  /* 세로 구분선 */
  border-right: ${({ isLast }) => (isLast ? "none" : "1px solid #3C424B")};
  padding: 0 15.5px; /* 선과 텍스트 간 여백 */
`;

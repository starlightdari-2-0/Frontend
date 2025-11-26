import styled from "styled-components";

export const CategoryWrapper = styled.div`
  width: 328px;
  height: 69px;
  gap: 12px;
  padding: 16px 0;
  display: flex;
  overflow-x: auto;

  /* 스크롤바 숨김 (선택 사항) */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
  height: 37px;
  border: none;
  cursor: pointer;
  flex-shrink: 0; /* 버튼이 줄어들지 않도록 설정 */
  padding: 8px 16px;
  border-radius: 30px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  background-color: ${({ $active }) => ($active ? "#AFCBFB" : "#3C424B")};
  color: ${({ $active }) => ($active ? "#1F2027" : "#A5B4C5")};
`;

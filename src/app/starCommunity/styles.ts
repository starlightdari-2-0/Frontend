import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 90px);
  color: #fff;
  position: relative;
`;

export const Container = styled.div`
  height: 100%;
  width: 328px;
  position: relative;
  overflow-y: auto;

  /* 스크롤바 숨김 (선택 사항) */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const MemoryStarList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px; // 임의 지정
`;

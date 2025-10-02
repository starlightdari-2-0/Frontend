import styled from "styled-components";

export const TabMenuWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #2A2F39;
`;

export const Tab = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0.5rem;
  border-bottom: ${({ $active }) => ($active ? "2px solid #4a90e2" : "none")};
  cursor: pointer;

  a {
    color: ${({ $active }) => ($active ? "#AFCBFB" : "#7D8799")};
    text-decoration: none;
    font-family: Pretendard;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
  }
`;

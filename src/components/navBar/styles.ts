import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #2A2F39;
  padding: 10px 0;
  width: 280px;
  height: 40px;
  border-radius: 999px;
  opacity: 1;
  position: absolute; 
  bottom: 40px; 
  left: 50%; 
  transform: translateX(-50%);
`;

export const NavItem = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 80px;
  height: 60px;
  gap: 4px;
  opacity: 1;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "white" : "#888")};
`;
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  color: #A5B4C5;
  display: flex;
  flex-direction: column;
  width: 360px;
  min-height: 100vh;
  min-width: 360px;
  max-width: 767px;
  opacity: 1;
  padding-right: 16px;
  padding-left: 16px;
  background-color: #1F2027;
  position: relative;
`;

export const Section = styled.div`
  padding-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #D9E0ED;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

export const Arrow = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
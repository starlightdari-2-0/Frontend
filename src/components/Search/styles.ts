import styled from "styled-components";
import Image from "next/image";

export const SearchWrapper = styled.div`
  background: #111827;
  color: white;
  height: 100vh; 
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;

export const BackButton = styled(Image)`
  border: none;
  background: none;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const SearchInput = styled.input`
  width: calc(100% - 60px);
  background: #2A2F39;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  outline: none;
  height: 48px;
  padding-left: 12px;
  padding-right: 48px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecentTitle = styled.div`
  color: #5D636F;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
`;

export const EmptyText = styled.div`
  color: #7D8799;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  height: 171px;
  min-height: 171px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #1f2937;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Word = styled.div`
  font-size: 16px;
  color: #e5e7eb;
`;


export const ToggleRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #2A2F39;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #7D8799;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #7D8799;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: calc(100vh - 40px);
  min-width: 360px;
  max-width: 767px;
  opacity: 1;
  padding-right: 16px;
  padding-bottom: 40px;
  padding-left: 16px;
  background-color: #1F2027;
  align-items: center;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  position: relative;
`;

export const BackButton = styled.div`
  position: absolute;
  left: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 999px;
  background: gray;
  margin: 16px 0;
`;

export const Label = styled.div`
  margin-bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #A5B4C5;
`;

export const CharCount = styled.span`
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 35px 10px 10px;
  border: 1px solid #5D636F;
  border-radius: 6px;
  background: transparent;
  color: white;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  background: transparent;
  color: #bbb;
  font-size: 16px;
  cursor: pointer;
  display: flex;
`;

export const SubmitButton = styled.button`
  width: calc(100% - 32px);
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #AFCBFB;
  color: #1F2027;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  position: absolute;
  bottom: 40px;

  &:hover {
    background: #8fb8ff;
  }
`;

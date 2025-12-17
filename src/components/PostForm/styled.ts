import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div``;

/* Header */
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const BackButton = styled(Image)`
  background: none;
  border: none;
  cursor: pointer;
`;

export const SubmitButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  color: ${({ $active }) => ($active ? "#AFCBFB" : "#5D636F")};
  font-family: Pretendard;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

/* Profile */
export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 60px;
  border-bottom: 1px solid #2A2F39;
`;

export const ProfileImg = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 999px;
`;

export const ProfileName = styled.div`
  color: #D9E0ED;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const SelectButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

/* Inputs */
export const TitleField = styled.div`
  padding: 16px 0;
  align-items: center;
  border-bottom: 1px solid #2A2F39;
`;

export const TitleInputField = styled.input`
  width: calc(100% - 32px);
  background: #2A2F39;
  border: none;
  color: #D9E0ED;
  font-size: 16px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 10px;

    &::placeholder {
    color: #7D8799;
  }
`;

export const ContentArea = styled.textarea`
  width: calc(100% - 32px);
  min-height: 120px;
  background: transparent;
  border: none;
  color: #D9E0ED;
  padding: 16px;
  resize: none;
  outline: none;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  &::placeholder {
    color: #5D636F;
  }
`;

/* Image Preview */
export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 16px;
`;

export const PreviewImg = styled.img`
  width: 100%;
  border-radius: 24px;
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

/* Tag */
export const TagBox = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: #5D636F;
  border-top: 1px solid #2A2F39;
  border-bottom: 1px solid #2A2F39;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

/* Bottom Toolbar */
export const Toolbar = styled.div`
  padding: 4px 0;
  display: flex;
`;

export const ToolBtn = styled.button`
  background: none;
  border: none;
  color: #A5B4C5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  cursor: pointer;  
  width: 81px;
  height: 40px;
`;

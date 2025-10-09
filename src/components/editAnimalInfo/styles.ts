import styled from "styled-components";
import Image from "next/image";

export const PreviewWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

export const Preview = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 999px;
  object-fit: cover;
`;

export const DefaultPreview = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 999px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled.button`
  position: absolute;
  right: 132px;
  bottom: 0;
  border: none;
  background: none;
  z-index: 2;
  cursor: pointer;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
`
export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 296px;
  height: 28px;
  padding: 10px 16px;
  border-radius: 10px;
  background-color: #2A2F39;
`;

export const Star = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #D9E0ED;
`;

export const Input = styled.input`
  border: 1px solid #5D636F;
  width: 294.4px;
  height: 26.4px;
  padding: 10px 16px;
  border-radius: 10px;
  background: transparent;
  color: #7D8799;
`;

export const CharCount = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  color: #A5B4C5;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #7D8799;
`;

export const Button = styled.button<{ disabled: boolean }>`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 328px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background: ${({ disabled }) =>
    disabled ? "#3C424B" : "#AFCBFB"};
  color: ${({ disabled }) => (disabled ? "#7D8799" : "#1F2027")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 250px;
`;

export const OptionButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#2a2f3a" : "#3C424B")};
  color: ${({ selected }) => (selected ? "#6c63ff" : "#D9E0ED")};
  padding: 4px 12px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
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
import styled from "styled-components";

export const Container = styled.div`
  width: 328px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h2`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #D9E0ED;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
`

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

// export const GenderOptions = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// export const GenderButton = styled.label<{ isSelected: boolean }>`
//   padding: 10px;
//   background: ${({ isSelected }) => (isSelected ? "#4b5563" : "#374151")};
//   color: ${({ isSelected }) => (isSelected ? "#ADC3F3" : "#fff")};
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: 0.2s;
//   text-align: center;
//   width: 100px;

//   &:hover {
//     background: #4b5563;
//   }

//   input {
//     display: none;
//   }
// `;

// export const Select = styled.select`
//   padding: 10px;
//   border: 1px solid #374151;
//   border-radius: 5px;
//   background: #1f2937;
//   color: white;
//   font-size: 14px;
//   width: 100%;
// `;

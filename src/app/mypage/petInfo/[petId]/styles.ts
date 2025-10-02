import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  height: 600px;
  padding: 30px;
  color: white;
  position: relative;
  align-items: center;
  background: linear-gradient(to bottom, #d9d9d91a 0%, #7373731a 100%);
  border-radius: 10px;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 512px;
  background-color: #ece6f0;
  position: relative;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 12px;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 495px;
`;

export const Label = styled.label`
  color: white;
  font-size: 14px;
`;

export const Title = styled.span`
  font-weight: 900;
  font-size: 35px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: rgba(170, 200, 255, 0.15);
  color: #adc3f3;
  cursor: pointer;
  position: absolute;
  bottom: 25px;
  right: 144px;
`;

import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2A2F39;
  border-radius: 16px;
  flex-direction: column;
  width: 240px;
  height: 240px;
`;

export const InfoCard = styled(Card)`
  height: 77px;
  width: 216px;
  padding: 12px;
`

export const PetImage = styled(Image)`
  width: 208px;
  height: 208px;
  border-radius: 16px;
  object-fit: cover;
`;

export const Name = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #E5ECF8;
  width: 216px;
  height: 40px;
  gap: 4px;
`;

export const SubText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #A5B4C5;
  background: #3C424B;
  width: 216px;
  height: 29px;
  gap: 8px;
  border-radius: 8px;
`;

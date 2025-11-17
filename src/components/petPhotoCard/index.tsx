import React from "react";
import { Container, Card, InfoCard, Name, PetImage, SubText } from "./styles";

const AnimalCard: React.FC = () => {
  return (
    <Container>
      <Card>
        <PetImage src="/maru.svg" alt="animal" width={208} height={208} />
      </Card>
      <InfoCard>
        <Name>솜이</Name>
        <SubText>함께한지 180일</SubText>
      </InfoCard>
    </Container>
  );
};

export default AnimalCard;
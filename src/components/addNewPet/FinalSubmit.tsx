import React from "react";
import { usePetStore } from "../../store/petStore";
import { Button, Container, Description, Header, Title } from "./styles";

const FinalSubmit = () => {
  const { type } = usePetStore(); // 임시로 넣어놓은 것

  return (
    <Container>
      <Header>
        <Title>기록할 별자리 모양을<br /> 선택해주세요</Title>
        <Description>선택한 별자리는 수정할 수 없으니 신중하게 골라주세요</Description>
      </Header>
      <Button disabled={!type}>제출하기</Button>
    </Container>
  );
};

export default FinalSubmit;

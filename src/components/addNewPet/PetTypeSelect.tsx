import React from "react";
import styled from "styled-components";
import { usePetStore } from "../../store/petStore";
import Image from "next/image";
import { Container, Title, Description } from "./PetPhotoUpload";
import { Header } from "./styles";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Option = styled.button<{ selected: boolean }>`
  background: ${(p) => (p.selected ? "#666" : "#2A2F39")};
  color: #D9E0ED;
  width: 328px;
  height: 48px;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 10px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
  border: none;
  display: flex;
  align-items: center;
`;

const Button = styled.button<{ disabled: boolean }>`
  width: 328px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background: ${({ disabled }) =>
        disabled ? "#3C424B" : "#AFCBFB"};
  color: ${({ disabled }) => (disabled ? "#7D8799" : "#1F2027")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const typeIconMap: Record<string, string> = {
    "강아지": "/animal/dog.svg",
    "고양이": "/animal/cat.svg",
    "어류": "/animal/fish.svg",
    "조류": "/animal/bird.svg",
    "파충류": "/animal/reptile.svg",
    "소동물": "/animal/hamster.svg",
    "그 외": "/animal/default.svg",
};
const types = ["강아지", "고양이", "어류", "조류", "파충류", "소동물", "그 외"];

const PetTypeSelect = () => {
    const { step, type, setType, setStep } = usePetStore();

    return (
        <Container>
            <Header>
                <Title>기록할 별자리 모양을<br /> 선택해주세요</Title>
                <Description>반려동물의 정보에 따라 별자리를 골라주세요</Description>
            </Header>

            <List>
                {types.map((t) => (
                    <Option
                        key={t}
                        selected={type === t}
                        onClick={() => setType(t)}
                    ><Image
                            src={typeIconMap[t]}
                            alt={t}
                            width={32}
                            height={32}
                        />
                        {t}
                    </Option>
                ))}
            </List>
            <Button onClick={() => setStep(step + 1)} disabled={!type}>다음</Button>
        </Container>
    );
};

export default PetTypeSelect;

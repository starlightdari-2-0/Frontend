"use client";

import styled from "styled-components"
import { usePetStore } from "../../store/petStore"
import { Container, Button, Description, Input, Label, Title, Header, Item } from "./styles"
import RequiredMark from "./RequiredMark"

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 250px;
`
const OptionButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#AFCBFB" : "#3C424B")};
  color: ${({ selected }) => (selected ? "#1F2027" : "#D9E0ED")};
  padding: 4px 12px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
`

const PetFeature = () => {
    const { step, personality, breed, setPersonality, setBreed, setStep } = usePetStore()

    const personalityOptions = ["활발한", "차분한", "내향적인", "쿨한", "사랑스러운", "애교많은"]

    return (
        <Container>
            <Header>
                <Title>반려동물의 특징을 골라주세요</Title>
                <Description>반려동물의 종, 성격을 선정해주세요.</Description>
            </Header>
            <Item>
                <Label>성격<RequiredMark /></Label>
                <Description>반려동물의 성격을 한 가지 골라주세요</Description>
                <ButtonGroup>
                    {personalityOptions.map((option) => (
                        <OptionButton
                            key={option}
                            selected={personality === option}
                            onClick={() => setPersonality(option)}
                        >
                            {option}
                        </OptionButton>
                    ))}
                </ButtonGroup>
            </Item>
            <Item>
                <Label>종</Label>
                <Description>반려동물의 상세한 종을 적어주세요</Description>
                <Input
                    placeholder="예시) 골든리트리버, 말티즈"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                />
            </Item>
            <Button disabled={!personality} onClick={() => setStep(step + 1)}>
                다음
            </Button>
        </Container>
    )
}

export default PetFeature;
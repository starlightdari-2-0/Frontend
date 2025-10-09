import React from "react";
import { usePetStore } from "../../store/petStore";
import { Container, Description, Title, Label, Input, Button, Header, Item, CharCount, InputWrapper, ClearButton, LabelWrapper } from "./styles";
import RequiredMark from "./RequiredMark";
import Image from "next/image";
import X from "/public/inputbox_X.svg";

const PetBasicInfo = () => {
    const { step, name, birth, meet, setName, setBirth, setMeet, setStep } = usePetStore();
    const isFilled = !!name && !!birth && !!meet;
    const maxLength = 20;

    return (
        <Container>
            <Header>
                <Title>반려동물의 기본적인 정보를<br /> 적어주세요</Title>
                <Description>반려동물의 이름, 생년월일과 만난 날을 기입해주세요</Description>
            </Header>

            <Item>
                <LabelWrapper>
                    <Label>이름<RequiredMark /></Label><CharCount>{name.length} / <span style={{ color: "#5D636F" }}>{maxLength}</span></CharCount>
                </LabelWrapper>
                <InputWrapper>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value.slice(0, maxLength))}
                        placeholder="이름"
                    />
                    {name && (
                        <ClearButton onClick={() => setName("")}><Image src={X} alt="X" /></ClearButton>
                    )}
                </InputWrapper>
            </Item>
            <Item>
                <Label>태어난 날<RequiredMark /></Label>
                <Input
                    type="date"
                    placeholder="태어난 날"
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                />
            </Item>
            <Item>
                <Label>처음 만난 날<RequiredMark /></Label>
                <Description>반려동물과 처음 만난 날을 선택해주세요</Description>
                <Input
                    type="date"
                    placeholder="처음 만난 날"
                    value={meet}
                    onChange={(e) => setMeet(e.target.value)}
                />
            </Item>
            <Button onClick={() => setStep(step + 1)} disabled={!isFilled}>다음</Button>
        </Container>
    );
};

export default PetBasicInfo;

import { usePetStore } from "../../store/petStore";
import { Container, Button, Description, Input, Label, Title, Header, Item, LabelWrapper, CharCount, InputWrapper, ClearButton } from "./styles";
import RequiredMark from "./RequiredMark";
import Image from "next/image";
import X from "/public/inputbox_X.svg";

const PetExtraInfo = () => {
    const { step, nickname, letter, death, setNickname, setLetter, setDeath, setStep } = usePetStore()
    const maxLength = 20;

    return (
        <Container>
            <Header>
                <Title>추가적인 정보를 입력해주세요</Title>
                <Description>반려동물에게 붙이고 싶은 별명과 한 줄 기록을 적어주세요</Description>
            </Header>
            <Item>
                <LabelWrapper>
                    <Label>불릴 별명<RequiredMark /></Label><CharCount>{nickname.length} / <span style={{ color: "#5D636F" }}>{maxLength}</span></CharCount>
                </LabelWrapper>
                <Description>반려동물에게 받을 편지를 별명으로 받을 수 있어요</Description>
                <InputWrapper>
                    <Input
                        type="text"
                        placeholder="반려동물에게 붙일 별명"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value.slice(0, maxLength))}
                    />
                    {nickname && (
                        <ClearButton onClick={() => setNickname("")}><Image src={X} alt="X" /></ClearButton>
                    )}
                </InputWrapper>
            </Item>
            <Item>
                <LabelWrapper>
                    <Label>한 줄 기록</Label><CharCount>{letter.length} / <span style={{ color: "#5D636F" }}>{maxLength}</span></CharCount>
                </LabelWrapper>
                <Description>반려동물에게 적고 싶은 한 줄 기록을 적어보세요</Description>
                <InputWrapper>
                    <Input
                        type="text"
                        placeholder="한 줄 기록을 적어보세요"
                        value={letter}
                        onChange={(e) => setLetter(e.target.value.slice(0, maxLength))}
                    />
                    {nickname && (
                        <ClearButton onClick={() => setLetter("")}><Image src={X} alt="X" /></ClearButton>
                    )}
                </InputWrapper>
            </Item>
            <Item>
                <Label>별나라로 간 날</Label>
                <Description>반려동물이 별나라로 간 날을 적어주세요 (이 정보는 추후에 추가할 수 있습니다)</Description>
                <Input type="date" value={death} onChange={(e) => setDeath(e.target.value)} />
            </Item>
            <Button onClick={() => setStep(step + 1)} disabled={!nickname}>다음</Button>
        </Container>
    )
}

export default PetExtraInfo;
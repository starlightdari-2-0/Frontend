import React from "react";
import styled from "styled-components";
import { usePetStore } from "../../store/petStore";
import Image from "next/image";
import { Container } from "./PetPhotoUpload";
import { Header as BaseHeader, Title, Description } from "./styles";
import axios from "axios";

export const Header = styled(BaseHeader)`
  align-self: flex-start;
`;

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

const typeMap: Record<string, number> = {
    "강아지": 1,
    "고양이": 2,
    "어류": 3,
    "조류": 4,
    "파충류": 5,
    "소동물": 6,
    "그 외": 7,
};
const types = Object.keys(typeMap);

const PetTypeSelect = () => {
    const { step, type, setType, setStep, setConstellations } = usePetStore();

    const handleNext = async () => {
        if (!type) return;
        try {
            // const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
            // const response = await axios.get(`http://${server_url}:8080/constellation/${type}`, {
            //     withCredentials: true,
            // });
            // setConstellations(response.data);
            setStep(step + 1);
        } catch (error) {
            console.error("동물 타입별 별자리 데이터 가져오기 실패:", error);
        }
    };

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
                        selected={type === typeMap[t]}
                        onClick={() => setType(typeMap[t])}
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
            <Button onClick={handleNext} disabled={!type}>다음</Button>
        </Container>
    );
};

export default PetTypeSelect;

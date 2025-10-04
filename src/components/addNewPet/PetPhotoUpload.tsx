import React, { useRef } from "react";
import styled from "styled-components";
import { usePetStore } from "../../store/petStore";
import Image from "next/image";
import add from "/public/add.svg";
import { Container as BaseContainer, Title as BaseTitle, Description as BaseDescription, Button, Header } from "./styles";

export const Container = styled(BaseContainer)`
  align-items: center;
`;

export const Title = styled(BaseTitle)`
  align-self: flex-start;
`;

const PreviewWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const Preview = styled(Image)`
  width: 160px;
  height: 160px;
  border-radius: 999px;
  object-fit: cover;
`;

const DefaultPreview = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 999px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled(BaseDescription)`
  align-self: flex-start;
`;

const AddButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  background: none;
  z-index: 2;
`;

const PetPhotoUpload = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { step, photo, setPhoto, setStep } = usePetStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setPhoto(url);
    }
  };

  return (
    <Container>
      <Header>
        <Title>반려동물의 프로필 사진을<br /> 설정해주세요</Title>
        <Description>선택한 사진은 추후에 변경할 수 있어요</Description>
      </Header>

      <PreviewWrapper>
        {photo ? (
          <Preview src={photo} alt="preview" width={160} height={160} />
        ) : (
          <DefaultPreview />
        )}
        <AddButton onClick={() => fileRef.current?.click()}><Image src={add} alt="" /></AddButton>
      </PreviewWrapper>
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button onClick={() => setStep(step + 1)} disabled={!photo}>다음</Button>
    </Container>
  );
};

export default PetPhotoUpload;

"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { usePetStore } from "../../store/petStore";
import Image from "next/image";
import add from "/public/add.svg";
import defaultImg from "/public/default_animal.svg";
import { Container as BaseContainer, Header as BaseHeader, Description, Button, Title } from "./styles";

export const Container = styled(BaseContainer)`
  align-items: center;
`;

export const Header = styled(BaseHeader)`
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

const DefaultPreview = styled(Preview)``;

const AddButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  background: none;
  z-index: 2;
  cursor: pointer;
`;

const PetPhotoUpload = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { step, photo, setPhoto, setStep } = usePetStore();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setPhoto(selectedFile);

      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  useEffect(() => {
    // photo가 변경되거나 컴포넌트가 언마운트될 때 URL 해제
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // 이미지 미리보기
  const displayUrl = previewUrl || (photo && URL.createObjectURL(photo));

  return (
    <Container>
      <Header>
        <Title>반려동물의 프로필 사진을<br /> 설정해주세요</Title>
        <Description>선택한 사진은 추후에 변경할 수 있어요</Description>
      </Header>

      <PreviewWrapper>
        {displayUrl ? (
          <Preview src={displayUrl} alt="preview" width={160} height={160} />
        ) : (
          <DefaultPreview src={defaultImg} alt="default" width={160} height={160} />
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

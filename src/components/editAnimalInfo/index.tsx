"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AddButton, Button, ButtonGroup, CharCount, ClearButton, DefaultPreview, Description, Input, InputWrapper, Item, Label, LabelWrapper, OptionButton, Preview, PreviewWrapper, Select, SelectWrapper, Star, StarWrapper } from "./styles";
import { usePetStore } from "../../store/petStore";
import { useModalStore } from "../../store/useModalStore";
import Image from "next/image";
import X from "/public/inputbox_X.svg";
import add from "/public/add.svg";
import defaultImg from "/public/default_animal.svg";
import dog from "/public/animal/dog.svg";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export interface EditingPetFormData {
  pet_id: number;
  pet_name: string;
  species: string;
  gender: string;
  birth_date: string;
  death_date: string;
  personality: string;
  nickname: string;
}

const GENDER_OPTIONS = [
  { label: "암컷", value: "FEMALE" },
  { label: "수컷", value: "MALE" },
  { label: "모르겠어요", value: "NONE" },
];
///
interface PetInfoData {
  pet_id: number;
  pet_img: string;
  pet_name: string;
  animal_type: string;
  species: string;
  gender: string;
  birth_date: string;
  fist_date: string;
  death_date: string;
  personality: string;
  member_id: number;
  nickname: string;
  context: string;
}

const mockPetData: PetInfoData = {
  pet_id: 123,
  pet_img: "/maru.svg",
  pet_name: "루비",
  animal_type: "강아지",
  species: "치와와",
  gender: "MALE",
  birth_date: "2018-01-20",
  fist_date: "2018-05-20",
  death_date: "2024-10-02",
  personality: "ACTIVE",
  member_id: 456,
  nickname: "별빛주인",
  context: "너무 귀여운 우리 루비"
};
///
const fetchPetInfo = async (petId: number) => {
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
  ///
  if (petId === 123) {
    return mockPetData;
  } else {
    return null; // 정보 없음 시뮬레이션
  }
  ///
  const { data } = await axios.get(`http://${server_url}:8080/pets/${petId}`, {
    // withCredentials: true,
  });
  return data;
};

interface EditAnimalInfoProps {
  petId: number;
}

const EditAnimalInfo = ({ petId }: EditAnimalInfoProps) => {
  const router = useRouter();
  const { openModal, closeModal } = useModalStore();

  const { name, birth, gender, meet, photo, personality, breed, nickname, death, setAll, setName, setBirth, setGender, setMeet, setPhoto, setPersonality, setBreed, setNickname, setDeath } = usePetStore();
  const fileRef = useRef<HTMLInputElement | null>(null);
  const isFilled = name && birth && meet && photo && personality;
  const maxLength = 20;

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

  const PersonalityMap: Record<string, string> = {
    "활발한": "ACTIVE",
    "차분한": "CALM",
    "내향적인": "INTROVERT",
    "쿨한": "COOL",
    "사랑스러운": "LOVELY",
    "애교많은": "AFFECTIONATE",
  };
  const personalityOptions = Object.keys(PersonalityMap);

  const { data: pet, isLoading, isError } = useQuery({
    queryKey: ["petInfo", petId],
    queryFn: () => fetchPetInfo(petId),
    enabled: !!petId, // petId가 있을 때만 요청
  });

  useEffect(() => {
    if (pet) {
      setAll({
        name: pet.pet_name,
        gender: pet.gender,
        birth: pet.birth_date,
        meet: pet.first_date,
        photo: pet.pet_img,
        personality: pet.personality,
        breed: pet.species,
        nickname: pet.nickname,
        death: pet.death_date,
      });
    }
  }, [pet, setAll]);

  if (isLoading) return <p>불러오는 중...</p>;
  if (isError) return <p>반려동물 정보를 불러오지 못했습니다.</p>;

  const handleSave = async () => {
    const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

    try {
      const response = await axios.patch(`http://${server_url}:8080/pets/${petId}`,
        {
          gender: gender,
          pet_img: photo,
          species: breed,
          pet_name: name,
          birth_date: birth,
          fist_date: meet,
          death_date: death,
          personality: personality,
          nickname: nickname,
          // context: letter
        },
        { withCredentials: true });

      console.log("반려동물 정보 수정 완료:", response.data);
      alert("반려동물 정보가 성공적으로 수정되었습니다!");
      closeModal();
      // 다음 페이지로 라우팅 추가 필요
      // router.push("/");
    } catch (error) {
      console.error("반려동물 정보 수정 중 오류 발생:", error);
      alert("정보 수정에 실패했습니다. 서버 상태를 확인해 주세요.");
      closeModal();
    }
  };

  const handleSaveButtonClick = () => {
    openModal("CONFIRM", {
      title: `프로필 변경 사항을 \n적용하시겠습니까?`,  // 줄바꿈 적용 필요
      confirmText: "확인",
      cancelText: "취소",
      onConfirm: handleSave,
    });
  };

  // 이미지 미리보기
  const displayUrl = previewUrl || (photo && URL.createObjectURL(photo));

  return (
    <>
      <PreviewWrapper>
        {displayUrl ? (
          <Preview src={displayUrl} alt="preview" width={100} height={100} />
        ) : (
          <DefaultPreview src={defaultImg} alt="default" width={100} height={100} />
        )}
        <AddButton onClick={() => fileRef.current?.click()}><Image src={add} alt="" width={24} height={24} /></AddButton>
      </PreviewWrapper>
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Item>
        <Label>별자리</Label>
        <Description>반려동물의 별자리는 수정할 수 없어요</Description>
        <StarWrapper>
          <Image src={dog} alt="" />
          <Star>강아지</Star>
        </StarWrapper>
      </Item>
      <Item>
        <LabelWrapper>
          <Label>이름</Label><CharCount>{name.length} / <span style={{ color: "#5D636F" }}>{maxLength}</span></CharCount>
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
        <Label>성별</Label>
        <SelectWrapper>
          <Select
            name="성별"
            value={gender}
            onChange={(e) => setGender(e.target.value)}>
            {GENDER_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </SelectWrapper>
      </Item>
      <Item>
        <Label>태어난 날</Label>
        <Input
          type="date"
          placeholder="태어난 날"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </Item>
      <Item>
        <Label>처음 만난 날</Label>
        <Input
          type="date"
          placeholder="처음 만난 날"
          value={meet}
          onChange={(e) => setMeet(e.target.value)}
        />
      </Item>
      <Item>
        <Label>성격</Label>
        <ButtonGroup>
          {personalityOptions.map((option) => (
            <OptionButton
              key={option}
              selected={personality === PersonalityMap[option]}
              onClick={() => setPersonality(PersonalityMap[option])}
            >
              {option}
            </OptionButton>
          ))}
        </ButtonGroup>
      </Item>
      <Item>
        <Label>종</Label>
        <Input
          placeholder="예시) 골든리트리버, 말티즈"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </Item>
      {/* 한 줄 기록 추가 필요 */}
      <Item>
        <Label>별나라로 간 날</Label>
        <Input type="date" value={death} onChange={(e) => setDeath(e.target.value)} />
      </Item>
      <Button disabled={!isFilled} onClick={handleSaveButtonClick}>수정하기</Button>
    </>
  );
};

export default EditAnimalInfo;

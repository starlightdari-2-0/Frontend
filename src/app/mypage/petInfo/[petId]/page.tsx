"use client";

import React from "react";
import Header from "../../../../components/header";
import { useParams, useRouter } from "next/navigation";
import { Body } from "./styles";
import PetCard from "../../../../components/petCard";
import { usePetInfo } from "../../../../hooks/usePetInfo";

export interface PetInfoData {
  pet_id: number;
  pet_img: string;
  pet_name: string;
  animal_type: string;
  species: string;
  gender: string;
  birth_date: string;
  first_date: string;
  death_date: string;
  personality: string;
  member_id: number;
  nickname: string;
  context: string;
}

const GenderMap: Record<string, string> = {
  MALE: "수컷",
  FEMALE: "암컷",
  NONE: "모르겠어요",
};

// editAnimalInfo와 동일한 PersonalityMap 사용
const PersonalityMap: Record<string, string> = {
  ACTIVE: "활발한",
  CALM: "차분한",
  INTROVERT: "내향적인",
  COOL: "쿨한",
  LOVELY: "사랑스러운",
  AFFECTIONATE: "애교많은",
};

// 동물 종 이미지 매핑
const typeIconMap: Record<string, string> = {
  강아지: "/animal/dog.svg",
  고양이: "/animal/cat.svg",
  어류: "/animal/fish.svg",
  조류: "/animal/bird.svg",
  파충류: "/animal/reptile.svg",
  소동물: "/animal/hamster.svg",
  "그 외": "/animal/default.svg",
};

// 동물 종 이름 (번호 → 이름)
const typeNumberToNameMap: Record<number, string> = {
  1: "강아지",
  2: "고양이",
  3: "어류",
  4: "조류",
  5: "파충류",
  6: "소동물",
  7: "그 외",
};

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const petId = Number(params.petId);

  const { data: petData, isLoading, isError, error } = usePetInfo(petId);

  if (isLoading) {
    return (
      <>
        <Body>
          <p>반려동물 정보를 받아오고 있어요...</p>
        </Body>
      </>
    );
  }

  if (isError || !petData) {
    return (
      <>
        <Body>
          <p>{isError ? `데이터를 불러오지 못했습니다: ${error?.message}` : "반려동물 정보가 존재하지 않습니다."}</p>
        </Body>
      </>
    );
  }

  // 성격 데이터 매핑
  const personality = petData.personality ? PersonalityMap[petData.personality] || petData.personality : "";
  // 성별 데이터 매핑
  const gender = petData.gender ? GenderMap[petData.gender] : "";

  return (
    <>
      <Body>
        {petData ? (
          <PetCard
            petId={petData.pet_id}
            name={petData.pet_name}
            startDate={petData.birth_date}
            endDate={petData.death_date}
            animalType={petData.animal_type}
            breed={petData.species}
            count={0}
            description={petData.context}
            gender={gender}
            personality={personality}
            imageUrl={petData.pet_img}
          />
        ) : (
          <p>해당 반려동물을 찾을 수 없습니다.</p>
        )}
      </Body>
    </>
  );
}

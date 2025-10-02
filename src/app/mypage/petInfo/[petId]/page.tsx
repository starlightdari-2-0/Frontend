"use client";

// import "../globals.css";
import React, { useEffect, useState } from "react";
import Header from "../../../../components/header";
import Image from "next/image";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Body } from "./styles";
import PetCard from "../../../../components/petCard";
import { useQuery } from "@tanstack/react-query";

export interface PetInfoData {
  pet_id: number;
  pet_img: string;
  pet_name: string;
  species: string;
  gender: string;
  birth_date: string;
  death_date: string;
  personality: string;
  member_id: number;
  nickname: string;
}

const GenderMap: Record<string, string> = {
  MALE: "남성",
  FEMALE: "여성",
  NONE: "모르겠어요",
};

const PersonalityMap: Record<string, string> = {
  CHARMING: "애교가 많아요",
  INDEPENDENT: "혼자서도 잘 놀아요",
  CURIOUS: "호기심이 많아요",
  CALM: "얌전해요",
  STUBBORN: "자기주장이 강해요",
  SENSITIVE: "감수성이 풍부해요",
};

const mockPetData: PetInfoData = {
  pet_id: 123,
  pet_img: "/maru.png",
  pet_name: "루비",
  species: "강아지",
  gender: "FEMALE",
  birth_date: "2018.05.20",
  death_date: "2024.10.02",
  personality: "CHARMING",
  member_id: 456,
  nickname: "별빛주인",
};

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const petId = Number(params.petId);

  const {
    data: petData,
    isLoading,
    isError,
    error
  } = useQuery<PetInfoData | null>({
    queryKey: ["petInfo", petId], // 쿼리 키에 petId를 포함하여 URL 변경 시 refetch되도록 설정
    queryFn: () => getUsersPetInfo(petId),
    enabled: !!petId && petId > 0, // petId가 유효할 때만 쿼리를 실행합니다.
    staleTime: 5 * 60 * 1000, // 5분 동안은 데이터를 신선하게 간주하여 재요청 방지
  });

  const getUsersPetInfo = async (petId: number): Promise<PetInfoData | null> => {
    const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 로딩 지연 시뮬레이션

    if (petId === 123) {
      return mockPetData;
    } else {
      return null; // 정보 없음 시뮬레이션
    }

    // try {
    //     const response = await axios({
    //         method: "GET",
    //         url: `http://${server_url}:8080/pets/${petId}`, // 실제 URL 사용
    //         withCredentials: true,
    //     });
    //     return response.data;
    // } catch (error) {
    //     console.error("반려동물 정보 요청 중 오류 발생:", error);
    //     throw error; // TanStack Query는 에러를 throw 해야 합니다.
    // }
  };


  // const handleDelete = async () => {
  //   if (
  //     confirm(
  //       "동물 정보를 삭제하시면 별자리가 사라질 거에요. 정말 삭제하시겠어요?"
  //     )
  //   ) {
  //     try {
  //       await axios.delete(`http://${server_url}:8080/pets/${petId}`, {
  //         withCredentials: true,
  //       });

  //       alert("반려동물이 삭제되었어요.");
  //       router.push(`/mypage/myInfo`);
  //     } catch (error) {
  //       console.error("동물 정보 삭제 중 오류 발생:", error);
  //     }
  //   } else {
  //     console.log("동물 정보 삭제 취소");
  //   }
  // };

  if (isLoading) {
    return (
      <>
        <Header />
        <Body>
          <p>반려동물 정보를 받아오고 있어요...</p>
        </Body>
      </>
    );
  }

  if (isError || !petData) {
    return (
      <>
        <Header />
        <Body>
          <p>{isError ? `데이터를 불러오지 못했습니다: ${error?.message}` : "반려동물 정보가 존재하지 않습니다."}</p>
        </Body>
      </>
    );
  }

  return (
    <>
      <Body>
        {petData ? (
          <PetCard
            name={petData.pet_name}
            startDate={petData.birth_date}
            endDate={petData.death_date}
            breed={petData.species}
            count={0}
            description={petData.personality ? PersonalityMap[petData.personality] : ""}
            gender={petData.gender ? GenderMap[petData.gender] : ""}
            personality={petData.personality ? PersonalityMap[petData.personality] : ""}
            imageUrl={petData.pet_img}
          />
        ) : (
          <p>해당 반려동물을 찾을 수 없습니다.</p>
        )}
      </Body>
    </>
  );
}

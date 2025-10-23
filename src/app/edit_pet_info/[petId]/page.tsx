"use client";

// import "../globals.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import EditingAnimalInfo from "../../../components/editAnimalInfo";
import EditAnimalInfo from "../../../components/editAnimalInfo";
import Header from "../../../components/header";
import { Container } from "./styles";
import { PetInfoData } from "../../mypage/petInfo/[petId]/page";

const GenderMap: Record<string, string> = {
    MALE: "남성",
    FEMALE: "여성",
    NONE: "모르겠어요",
};

const mockPetData: PetInfoData = {
    pet_id: 123,
    pet_img: "/maru.svg",
    pet_name: "루비",
    animal_type: "강아지",
    species: "치와와",
    gender: "FEMALE",
    birth_date: "2018.03.20",
    first_date: "2018.05.20",
    death_date: "2024.10.02",
    personality: "ACTIVE",
    member_id: 456,
    nickname: "별빛주인",
    context: "너무 귀여운 우리 루비"
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

        try {
            const response = await axios({
                method: "GET",
                url: `http://${server_url}:8080/pets/${petId}`,
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            console.error("반려동물 정보 요청 중 오류 발생:", error);
            throw error;
        };
    };

    if (isLoading) {
        return (
            <>
                <Header title="반려동물 정보 수정" backUrl="" />
                <Container>
                    <p>반려동물 정보를 받아오고 있어요...</p>

                </Container>
            </>
        );
    }

    if (isError || !petData) {
        return (
            <>
                <Header title="반려동물 정보 수정" backUrl="" />
                <Container>
                    <p>{isError ? `데이터를 불러오지 못했습니다: ${error?.message}` : "반려동물 정보가 존재하지 않습니다."}</p>
                </Container>
            </>
        );
    }

    return (
        <>
            <Header title="반려동물 정보 수정" backUrl="" />
            <Container>
                <EditAnimalInfo petId={petId} />
            </Container>
        </>
    );
}

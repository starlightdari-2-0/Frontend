"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { usePetInfo } from "../../../hooks/usePetInfo";
import EditAnimalInfo from "../../../components/editAnimalInfo";
import Header from "../../../components/header";
import { Container } from "./styles";
import { PetInfoData } from "../../mypage/petInfo/[petId]/page";

export default function Page() {
    const router = useRouter();
    const params = useParams();
    const petId = Number(params.petId);

    const { data: petData, isLoading, isError, error } = usePetInfo(petId);

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

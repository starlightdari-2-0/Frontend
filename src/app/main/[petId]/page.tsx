"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../../../components/header";
import BottomMessage from "../../../components/addStarMessage";
import AddStarModal from "../../../components/addStarModal";
import ConstellationCanvas, { PetData, Star } from "../../../components/constellationCanvas";
import StarPage from "../../../components/starModal";
import Image from "next/image";
import { Body } from "./styles";
import { mockPetDataList } from "../../../mocks/petStar";

export default function Page() {
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
  const params = useParams();
  const petId = Number(params.petId);

  const [selectedStarId, setSelectedStarId] = useState<number | null>(null);
  const [selectedMemoryId, setSelectedMemoryId] = useState<number | null>(0); // 임의 지정

  const [isAddStarModalOpen, setIsAddStarModalOpen] = useState(false);
  const [isStarInfoModalOpen, setIsStarInfoModalOpen] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  // const pet = mockPetDataList.find(p => p.petId === Number(params.petId))!;


  // // 별자리 정보 fetch 함수 (mock)
  // const fetchPetStarInfo = async (): Promise<PetData> => {
  //   await new Promise((resolve) => setTimeout(resolve, 800)); // 0.8초 지연
  //   return pet;
  // };

  // 별자리 정보 fetch 함수
  const fetchPetStarInfo = async (): Promise<PetData> => {
    const response = await axios.get(`http://${server_url}:8080/pets/${petId}/stars`, {
      withCredentials: true,
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    return response.data;
  };

  const {
    data: petData,
    isLoading: isPetLoading,
    isError: isPetError,
  } = useQuery<PetData>({
    queryKey: ["petStarInfo", petId],
    queryFn: fetchPetStarInfo,
    enabled: !!petId,
  });

  const openAddStarModal = () => {
    setIsAddStarModalOpen(true);
  };

  const closeAddStarModal = () => {
    setIsAddStarModalOpen(false);
    setSelectedStarId(null); // 모달 닫을 때 선택된 별 해제
  };

  const openStarInfoModal = () => {
    setIsStarInfoModalOpen(true);
  };

  const closeStarInfoModal = () => {
    setIsStarInfoModalOpen(false);
    setSelectedStarId(null); // 모달 닫을 때 선택된 별 해제
  };

  const handleStarClick = (star: Star) => {
    setSelectedStarId(star.node_id);
    setIsAddStarModalOpen(false);
    setIsStarInfoModalOpen(false);

    if (star.written) {
      setSelectedMemoryId(star.memory_id);
      openStarInfoModal(); // 추억별 모달 띄우기
    } else {
      setMessageVisible(true); // BottomMessage 표시
    }
  };

  // 바깥 클릭 시 메시지 숨기기, 별 효과 제거
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !messageRef.current?.contains(event.target as Node) &&
        !isAddStarModalOpen &&
        !isStarInfoModalOpen
      ) {
        setMessageVisible(false);
        setSelectedStarId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAddStarModalOpen, isStarInfoModalOpen]);

  const handleAddStar = (starId: number | null) => {
    setMessageVisible(false);

    if (starId !== null) {
      console.log(`아이디 ${starId} 별에 추억을 추가할게요.`);
      openAddStarModal();
    }
  };

  if (isPetLoading) return <p>로딩 중...</p>;
  if (isPetError || !petData) return <p>데이터를 불러올 수 없습니다.</p>;

  return (
    <>
      <Header title={`${petData.petName}자리`} />
      <Body>
        <ConstellationCanvas
          petData={petData}
          selectedStarId={selectedStarId}
          onStarClick={handleStarClick}
        />
        <BottomMessage
          ref={messageRef}
          show={messageVisible}
          onAddClick={() => handleAddStar(selectedStarId)}
        />
      </Body>

      {isAddStarModalOpen && (
        <AddStarModal starId={selectedStarId} onClose={closeAddStarModal} />
      )}
      {isStarInfoModalOpen && (
        <StarPage
          // starId={selectedStarId}
          memoryId={selectedMemoryId ?? 0}
          onClose={closeStarInfoModal}
        />
      )}
    </>
  );
}

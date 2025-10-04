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

  const mockPetData: PetData = {
    "petId": 102,
    "petName": "petName",
    "starList": [
      {
        "star_id": 16,
        "index_id": 0,
        "x_star": 72,
        "y_star": 276,
        "written": true,
        "memory_id": null
      },
      {
        "star_id": 17,
        "index_id": 1,
        "x_star": 73,
        "y_star": 203,
        "written": true,
        "memory_id": null
      },
      {
        "star_id": 18,
        "index_id": 2,
        "x_star": 256,
        "y_star": 148,
        "written": true,
        "memory_id": null
      },
      {
        "star_id": 19,
        "index_id": 3,
        "x_star": 371,
        "y_star": 166,
        "written": true,
        "memory_id": null
      },
      {
        "star_id": 20,
        "index_id": 4,
        "x_star": 287,
        "y_star": 385,
        "written": true,
        "memory_id": null
      },
      {
        "star_id": 21,
        "index_id": 5,
        "x_star": 196,
        "y_star": 157,
        "written": true,
        "memory_id": null
      },
      {
        "star_id": 22,
        "index_id": 6,
        "x_star": 157,
        "y_star": 219,
        "written": true,
        "memory_id": null
      },
      {
        "star_id": 23,
        "index_id": 7,
        "x_star": 180,
        "y_star": 272,
        "written": true,
        "memory_id": 12
      },
      {
        "star_id": 24,
        "index_id": 8,
        "x_star": 252,
        "y_star": 294,
        "written": false,
        "memory_id": null
      },
      {
        "star_id": 25,
        "index_id": 9,
        "x_star": 261,
        "y_star": 251,
        "written": false,
        "memory_id": null
      },
      {
        "star_id": 26,
        "index_id": 10,
        "x_star": 284,
        "y_star": 220,
        "written": false,
        "memory_id": null
      },
      {
        "star_id": 27,
        "index_id": 11,
        "x_star": 295,
        "y_star": 170,
        "written": false,
        "memory_id": null
      },
      {
        "star_id": 28,
        "index_id": 12,
        "x_star": 388,
        "y_star": 233,
        "written": false,
        "memory_id": null
      },
      {
        "star_id": 29,
        "index_id": 13,
        "x_star": 308,
        "y_star": 303,
        "written": false,
        "memory_id": null
      },
      {
        "star_id": 30,
        "index_id": 14,
        "x_star": 363,
        "y_star": 342,
        "written": false,
        "memory_id": null
      }
    ],
    "svgPath": "https://starlightbucket.s3.ap-northeast-2.amazonaws.com/constellationSvg/DOG_1.svg",
    "edges": [
      {
        "startPoint": 0,
        "endPoint": 1
      },
      {
        "startPoint": 4,
        "endPoint": 13
      },
      {
        "startPoint": 5,
        "endPoint": 2
      },
      {
        "startPoint": 6,
        "endPoint": 5
      },
      {
        "startPoint": 6,
        "endPoint": 1
      },
      {
        "startPoint": 7,
        "endPoint": 6
      },
      {
        "startPoint": 8,
        "endPoint": 9
      },
      {
        "startPoint": 9,
        "endPoint": 10
      },
      {
        "startPoint": 11,
        "endPoint": 2
      },
      {
        "startPoint": 11,
        "endPoint": 10
      },
      {
        "startPoint": 11,
        "endPoint": 3
      },
      {
        "startPoint": 12,
        "endPoint": 3
      },
      {
        "startPoint": 13,
        "endPoint": 8
      },
      {
        "startPoint": 13,
        "endPoint": 14
      }
    ]
  }

  // 별자리 정보 fetch 함수 (mock)
  const fetchPetStarInfo = async (): Promise<PetData> => {
    await new Promise((resolve) => setTimeout(resolve, 800)); // 0.8초 지연
    return mockPetData;
  };

  // // 별자리 정보 fetch 함수
  // const fetchPetStarInfo = async (): Promise<PetData> => {
  //   const response = await axios.get(`http://${server_url}:8080/pets/${petId}/stars`, {
  //     withCredentials: true,
  //     headers: { "Content-Type": "application/json;charset=utf-8" },
  //   });
  //   return response.data;
  // };

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
    setSelectedStarId(star.star_id);
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

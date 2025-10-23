"use client";

import React, { useState, useEffect } from "react";
import { usePetStore } from "../../store/petStore";
import { Button, Container, Description, Header, Title } from "./styles";
import ImageCarousel, { ConstellationData } from "./ConstellationImageCarousel";
import axios from "axios";
import { useRouter } from "next/navigation";

const FinalSubmit = () => {
  const { type, name, gender, birth, meet, photo, personality, breed, nickname, letter, death, constellation_id } = usePetStore();
  const router = useRouter();
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

  const [constellationData, setConstellationData] = useState<ConstellationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchConstellations = async (type: number) => {
    const response = await axios.get<ConstellationData[]>(`http://${server_url}:8080/constellation/${type}`, {
      withCredentials: true,
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    return response.data;
  };

  useEffect(() => {
    if (type) {
      const loadConstellations = async () => {
        setIsLoading(true);
        try {
          const data = await fetchConstellations(type);
          setConstellationData(data);
        } catch (error) {
          console.error("별자리 데이터 로드 실패:", error);
          alert("별자리 데이터를 불러올 수 없습니다. 서버 상태를 확인해 주세요.");
          setConstellationData([]);
        } finally {
          setIsLoading(false);
        }
      };
      loadConstellations();
    }
  }, [type]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://${server_url}:8080/pets`,
        {
          gender: gender,
          pet_img: photo,
          animal_type_id: type,
          // 선택한 별자리 추가 필요
          // con_id: constellation_id,
          species: breed,
          pet_name: name,
          birth_date: birth,
          fist_date: meet,
          death_date: death,
          personality: personality,
          nickname: nickname,
          context: letter
        },
        { withCredentials: true }
      );
      console.log("반려동물 정보 제출 성공:", response.data);
      alert("반려동물 정보가 성공적으로 기록되었습니다!");

      router.push(`/pet/${response.data.petId}`);

    } catch (error) {
      console.error("반려동물 정보 생성 실패:", error);
      alert("정보 제출에 실패했습니다. 서버 상태를 확인해 주세요.");
    }
  };

  const isButtonDisabled = !type || !name || !gender || !birth || !meet || !photo || !personality || !nickname || !constellation_id;

  return (
    <Container>
      <Header>
        <Title>기록할 별자리 모양을<br /> 선택해주세요</Title>
        <Description>선택한 별자리는 수정할 수 없으니 신중하게 골라주세요</Description>
      </Header>
      <ImageCarousel initialConstellations={constellationData} />
      <Button disabled={isButtonDisabled} onClick={handleSubmit}>별자리 만들기</Button>
    </Container>
  );
};

export default FinalSubmit;

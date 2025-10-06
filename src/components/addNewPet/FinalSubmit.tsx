import React from "react";
import { usePetStore } from "../../store/petStore";
import { Button, Container, Description, Header, Title } from "./styles";
import ImageCarousel from "./ConstellationImageCarousel";
import axios from "axios";
import { useRouter } from "next/navigation";


const FinalSubmit = () => {
  const { type, name, birth, meet, photo, personality, breed, nickname, letter, death } = usePetStore();

  const handleSubmit = async () => {
    const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

    try {
      const response = await axios.post(`http://${server_url}:8080/pets`,
        {
          // 성별, 선택한 별자리 추가 필요
          // constellation_id: selectedConstellationId,
          // gender: gender,
          pet_img: photo,
          animal_type_id: type,
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
      // 다음 페이지로 라우팅 추가 필요
      // router.push("/");

    } catch (error) {
      console.error("반려동물 정보 생성 실패:", error);
      alert("정보 제출에 실패했습니다. 서버 상태를 확인해 주세요.");
    }
  };

  const isButtonDisabled = !type || !name || !birth || !meet || !photo || !personality || !nickname;

  return (
    <Container>
      <Header>
        <Title>기록할 별자리 모양을<br /> 선택해주세요</Title>
        <Description>선택한 별자리는 수정할 수 없으니 신중하게 골라주세요</Description>
      </Header>
      <ImageCarousel />
      <Button disabled={isButtonDisabled} onClick={handleSubmit}>제출하기</Button>
    </Container>
  );
};

export default FinalSubmit;

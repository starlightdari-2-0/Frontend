import { StarItemData } from "../../types/starItem";
import Image from "next/image";
import right from "/public/carousel_right.svg";
import animal from "/public/default_animal.svg";
import { Center, InfoBtn, PetAvatar, PetName } from "./styles";

export function StarHeader({ current }: { current: StarItemData }) {
  return (
    <Center>
      <PetAvatar src={animal} alt="" width={100} height={100} />
      <PetName>{current.name}</PetName>
      <InfoBtn>
        반려동물 정보 보기
        <Image src={right} alt="" width={24} height={24} />
      </InfoBtn>
    </Center>
  );
}


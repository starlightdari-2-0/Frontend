import { StarItemData } from "../../types/starItem";
import Image from "next/image";
import right from "/public/carousel_right.svg";
import animal from "/public/default_animal.svg";
import { Center, InfoBtn, PetAvatar, PetName } from "./styles";
import { usePetInfo } from "../../hooks/usePetInfo";
import { useRouter } from "next/navigation";

export function StarHeader({ current }: { current: StarItemData }) {
  const router = useRouter();
  const petId = current.petId || 0;

  const { data: petData, isLoading } = usePetInfo(petId);

  const handleInfoClick = () => {
    console.log(petId)
    if (petId) {
      router.push(`/mypage/petInfo/${petId}`);
    }
  };
  console.log("petData", petData)

  const petImageUrl = petData?.pet_img || animal;
  const petName = petData?.pet_name || current.name;

  return (
    <Center>
      <PetAvatar src={petImageUrl} alt="" width={100} height={100} />
      <PetName>{petName}</PetName>
      <InfoBtn onClick={handleInfoClick} disabled={isLoading}>
        반려동물 정보 보기
        <Image src={right} alt="" width={24} height={24} />
      </InfoBtn>
    </Center>
  );
}


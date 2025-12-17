import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PetInfoData } from "../app/mypage/petInfo/[petId]/page";

const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

/**
 * 반려동물 정보를 가져오는 API 함수
 * @param petId - 반려동물 ID
 * @returns PetInfoData 또는 null
 */
const fetchPetInfo = async (petId: number): Promise<PetInfoData | null> => {
    try {
        const response = await axios.get(`${server_url}/pets/${petId}`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("반려동물 정보 요청 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 반려동물 정보를 조회하는 커스텀 훅
 * @param petId - 반려동물 ID
 * @returns { data, isLoading, isError, error }
 */
export const usePetInfo = (petId: number) => {
    return useQuery<PetInfoData | null>({
        queryKey: ["petInfo", petId],
        queryFn: () => fetchPetInfo(petId),
        enabled: !!petId && petId > 0,
        staleTime: 5 * 60 * 1000, // 5분 동안은 캐시 유지
    });
};

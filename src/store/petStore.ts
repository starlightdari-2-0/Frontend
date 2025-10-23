import { create } from "zustand";

interface ConstellationData {
    con_id: number;
    code: string;
    thumbnail_img: string;
}

interface PetState {
    step: number;
    name: string;
    gender: string;
    birth: string;
    meet: string;
    photo: string | null;
    personality: string;
    breed: string;
    nickname: string;
    letter: string;
    death: string;
    type: number;
    constellations: ConstellationData[];
    constellation_id: number;
    setStep: (step: number) => void;
    setName: (name: string) => void;
    setGender: (gender: string) => void;
    setBirth: (birth: string) => void;
    setMeet: (meet: string) => void;
    setPhoto: (photo: string) => void;
    setPersonality: (value: string) => void;
    setBreed: (value: string) => void;
    setNickname: (value: string) => void;
    setLetter: (value: string) => void;
    setDeath: (value: string) => void
    setType: (type: number) => void;
    setConstellations: (data: ConstellationData[]) => void;
    setConstellationId: (constellation_id: number) => void;
    reset: () => void;
    setAll: (data: Partial<PetState>) => void;
}

// 확인용 mock data
const mockConstellations: ConstellationData[] = [
    { con_id: 1, code: "강아지별", thumbnail_img: "/animal/dog.svg" },
    { con_id: 2, code: "고양이별", thumbnail_img: "/animal/cat.svg" },
    { con_id: 3, code: "물고기별", thumbnail_img: "/animal/fish.svg" },
    { con_id: 4, code: "새별", thumbnail_img: "/animal/bird.svg" },
    { con_id: 5, code: "햄스터별", thumbnail_img: "/animal/hamster.svg" },
];

export const usePetStore = create<PetState>((set) => ({
    step: 0,
    name: "",
    gender: "",
    birth: "",
    meet: "",
    photo: null,
    personality: "",
    breed: "",
    nickname: "",
    letter: "",
    death: "",
    type: 0,
    // constellations: [],
    constellations: mockConstellations,
    constellation_id: 0,
    setStep: (step) => set({ step }),
    setName: (name) => set({ name }),
    setGender: (gender) => set({ gender }),
    setBirth: (birth) => set({ birth }),
    setMeet: (meet) => set({ meet }),
    setPhoto: (photo) => set({ photo }),
    setPersonality: (value) => set({ personality: value }),
    setBreed: (value) => set({ breed: value }),
    setNickname: (value) => set({ nickname: value }),
    setLetter: (value) => set({ letter: value }),
    setDeath: (value) => set({ death: value }),
    setType: (type) => set({ type }),
    setConstellations: (constellations) => set({ constellations }),
    setConstellationId: (constellation_id) => set({ constellation_id }),
    reset: () =>
        set({
            name: "",
            birth: "",
            meet: "",
            photo: null,
            type: 0,
        }),
    setAll: (data) => set(data),
}));

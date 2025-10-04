import { create } from "zustand";

interface PetState {
    step: number;
    name: string;
    birth: string;
    meet: string;
    photo: string | null;
    personality: string;
    breed: string;
    nickname: string;
    letter: string;
    death: string;
    type: string;
    setStep: (step: number) => void;
    setName: (name: string) => void;
    setBirth: (birth: string) => void;
    setMeet: (meet: string) => void;
    setPhoto: (photo: string) => void;
    setPersonality: (value: string) => void;
    setBreed: (value: string) => void;
    setNickname: (value: string) => void;
    setLetter: (value: string) => void;
    setDeath: (value: string) => void
    setType: (type: string) => void;
    reset: () => void;
}

export const usePetStore = create<PetState>((set) => ({
    step: 0,
    name: "",
    birth: "",
    meet: "",
    photo: null,
    personality: "",
    breed: "",
    nickname: "",
    letter: "",
    death: "",
    type: "",
    setStep: (step) => set({ step }),
    setName: (name) => set({ name }),
    setBirth: (birth) => set({ birth }),
    setMeet: (meet) => set({ meet }),
    setPhoto: (photo) => set({ photo }),
    setPersonality: (value) => set({ personality: value }),
    setBreed: (value) => set({ breed: value }),
    setNickname: (value) => set({ nickname: value }),
    setLetter: (value) => set({ letter: value }),
    setDeath: (value) => set({ death: value }),
    setType: (type) => set({ type }),
    reset: () =>
        set({
            name: "",
            birth: "",
            meet: "",
            photo: null,
            type: "",
        }),
}));

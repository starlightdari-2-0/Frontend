import { create } from "zustand";
// ConfirmModalProps가 ModalState 대신 사용될 수 있도록 types 파일 업데이트가 필요할 수 있습니다.
import { ModalType, ConfirmModalProps } from "../components/modal/types";

// 모달에 전달되는 props의 타입을 더 구체적으로 정의하거나, 
// 여기서는 일반적인 Record<string, any>를 유지합니다.
type ModalProps = Record<string, any>;

interface ModalStore {
    // modal: ModalState; // 기존 속성 (제거)

    // 새 속성: 현재 열린 모달의 타입 (null이면 닫힘)
    modalType: ModalType | null;

    // 새 속성: 현재 모달에 전달할 props
    modalProps: ModalProps;

    // 함수 시그니처는 동일하게 유지
    openModal: (type: ModalType, props: ModalProps) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    // 초기 상태를 개별 속성으로 분리
    modalType: null,
    modalProps: {}, // 빈 객체로 초기화

    openModal: (type, props = {}) =>
        // 상태를 업데이트할 때도 개별 속성으로 저장
        set({ modalType: type, modalProps: props }),

    closeModal: () =>
        // 모달을 닫을 때
        set({ modalType: null, modalProps: {} }),
}));
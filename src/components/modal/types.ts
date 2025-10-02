export type ModalType = 'CONFIRM' | 'ALERT' | 'CUSTOM';

// ConfirmModal에 전달되는 props 타입 (선택 사항)
export interface ConfirmModalProps {
    title: string;
    description: string;
    onConfirm: () => void;
    // onClose는 GlobalModal에서 전달해줄 것이므로 여기서는 제외
}
"use client";

import CommonModal from "../CommonModal";

interface ConfirmModalProps {
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description?: string;
}

export default function ConfirmModal({
    onClose,
    onConfirm,
    title,
    description,
}: ConfirmModalProps) {
    return (
        <CommonModal
            title={title}
            description={description}
            confirmText="삭제하기"
            cancelText="취소하기"
            onConfirm={onConfirm}
            onCancel={onClose}
        />
    );
}

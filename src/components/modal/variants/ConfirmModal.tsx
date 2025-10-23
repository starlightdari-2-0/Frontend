"use client";

import CommonModal from "../CommonModal";

interface ConfirmModalProps {
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
}

export default function ConfirmModal({
    onClose,
    onConfirm,
    title,
    description,
    confirmText,
    cancelText
}: ConfirmModalProps) {
    return (
        <CommonModal
            title={title}
            description={description}
            confirmText={confirmText || "삭제하기"}
            cancelText={cancelText || "취소하기"}
            onConfirm={onConfirm}
            onCancel={onClose}
        />
    );
}

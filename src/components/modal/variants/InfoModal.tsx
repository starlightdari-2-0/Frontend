"use client";

import CommonModal from "../CommonModal";

interface InfoModalProps {
    onClose: () => void;
    message: string;
}

export default function InfoModal({ onClose, message }: InfoModalProps) {
    return (
        <CommonModal
            title="알림"
            description={message}
            confirmText="확인"
            onConfirm={onClose}
        />
    );
}

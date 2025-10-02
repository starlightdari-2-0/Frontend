"use client";

import BaseModal from "../BaseModal";

interface ReportModalProps {
    onClose: () => void;
    onSubmit: (reason: string) => void;
}

export default function ReportModal({ onClose, onSubmit }: ReportModalProps) {
    const reasons = [
        "스팸, 광고",
        "중복, 도배성 글",
        "유해하거나 위험한 글",
        "폭력적이거나 혐오스러운 글",
        "선정적인 글",
        "부적절한 글",
        "주제와 무관한 글",
    ];

    return (
        <BaseModal onClose={onClose}>
            <h3>신고하는 이유를 선택해주세요</h3>
            <ul>
                {reasons.map((reason) => (
                    <li key={reason}>
                        <button onClick={() => onSubmit(reason)}>{reason}</button>
                    </li>
                ))}
            </ul>
        </BaseModal>
    );
}

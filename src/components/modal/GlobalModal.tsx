"use client";

import React from 'react';
import { ModalType, ConfirmModalProps } from './types';
import { useModalStore } from '../../store/useModalStore';
import ConfirmModal from './variants/ConfirmModal';

const GlobalModal: React.FC = () => {
    // modalProps의 타입은 Record<string, any>입니다.
    const { modalType, modalProps, closeModal } = useModalStore();

    if (!modalType) {
        return null;
    }

    switch (modalType) {
        case 'CONFIRM':
            // modalProps를 ConfirmModalProps 타입으로 명시적으로 단언합니다.
            const confirmProps = modalProps as ConfirmModalProps;

            return (
                <ConfirmModal
                    // 컴파일러에게 이제 이 객체가 ConfirmModalProps임을 알려줍니다.
                    {...confirmProps}
                    // onClose는 필수 Props가 아니었으므로, GlobalModal에서 추가합니다.
                    onClose={closeModal}
                />
            );

        default:
            return null;
    }
};

export default GlobalModal;
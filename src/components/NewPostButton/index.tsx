import React from "react";
import Image from "next/image";
import write from "/public/write.svg";
import { StyledButton } from "./styles";

interface WriteButtonProps {
    onClick: () => void; // 클릭 이벤트 핸들러
}

export const WriteButton: React.FC<WriteButtonProps> = ({
    onClick,
}) => {
    return (
        <StyledButton onClick={onClick}>
            글쓰기
            <Image src={write} alt="" />
        </StyledButton>
    );
};
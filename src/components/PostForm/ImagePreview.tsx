import { ImageWrapper, PreviewImg, RemoveBtn } from "./styled";
import Image from "next/image";
import close from "/public/modal_close.svg";

interface ImagePreviewProps {
    image: string;         // 미리보기 URL
    onRemove: () => void;  // 삭제 버튼 클릭
}

export default function ImagePreview({ image, onRemove }: ImagePreviewProps) {
    return (
        <ImageWrapper>
            <PreviewImg key={image} src={image} alt="" />
            <RemoveBtn onClick={onRemove}>
                <Image src={close} alt="" width={48} height={48} />
            </RemoveBtn>
        </ImageWrapper>
    );
}

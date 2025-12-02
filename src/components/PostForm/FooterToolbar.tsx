import { Toolbar, ToolBtn } from "./styled";
import Image from "next/image";
import photoIcon from "/public/photo.svg";
import pinIcon from "/public/pin.svg";

interface FooterToolbarProps {
    onImageSelect: (file: File) => void;
}

export default function FooterToolbar({ onImageSelect }: FooterToolbarProps) {
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            onImageSelect(e.target.files[0]);
        }
    };

    return (
        <Toolbar>
            <label htmlFor="file-upload-input">
                <ToolBtn as="div">
                    <Image src={photoIcon} alt="사진" />
                    사진
                </ToolBtn>
            </label>
            <input type="file" accept="image/*" id="file-upload-input" hidden onChange={handleFile} />

            <ToolBtn>
                <Image src={pinIcon} alt="위치" />
                위치
            </ToolBtn>
        </Toolbar>
    );
}

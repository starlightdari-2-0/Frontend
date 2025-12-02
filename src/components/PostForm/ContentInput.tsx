import { ContentArea } from "./styled";

interface ContentInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ContentInput({ value, onChange }: ContentInputProps) {
    return (
        <ContentArea
            placeholder="기록하고 싶은 내용을 입력해주세요!"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
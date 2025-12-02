import { TitleField, TitleInputField } from "./styled";

interface TitleInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function TitleInput({ value, onChange }: TitleInputProps) {
    return (
        <TitleField>
            <TitleInputField
                placeholder="제목"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </TitleField>
    );
}

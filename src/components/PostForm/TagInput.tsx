import { TagBox } from "./styled";

interface TagInputProps {
    tags: string[];
    setTags: (tags: string[]) => void;
}

export default function TagInput({ tags, setTags }: TagInputProps) {
    return (
        <TagBox>#태그 입력 (최대 10개)</TagBox>
    );
}

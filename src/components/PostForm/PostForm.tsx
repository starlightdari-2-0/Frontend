"use client"

import { Container, Section } from "./styled";
import Header from "./Header";
import ProfileSelector from "./ProfileSelector";
import TitleInput from "./TitleInput";
import ContentInput from "./ContentInput";
import ImagePreview from "./ImagePreview";
import TagInput from "./TagInput";
import FooterToolbar from "./FooterToolbar";

import { useEffect, useState } from "react";

export default function PostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

    const handleImageSelect = (file: File) => {
        setSelectedFile(file);
    };

    const handleImageRemove = () => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl); // 이전 URL 정리
        }
        setSelectedFile(null);
        setPreviewUrl("");
    };

    useEffect(() => {
        if (!selectedFile) return

        // 이전 previewUrl 정리
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        // 새 URL 생성
        const newUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(newUrl);

        // cleanup: 다음 파일로 바뀔 때 URL 정리
        return () => {
            URL.revokeObjectURL(newUrl);
        };
    }, [selectedFile]);

    return (
        <Container>
            <Header />

            <Section>
                <ProfileSelector />
                <TitleInput value={title} onChange={setTitle} />
                <ContentInput value={content} onChange={setContent} />

                {previewUrl && (
                    <ImagePreview image={previewUrl} onRemove={handleImageRemove} />
                )}

                <TagInput tags={tags} setTags={setTags} />
            </Section>

            <FooterToolbar onImageSelect={handleImageSelect} />
        </Container>
    );
}

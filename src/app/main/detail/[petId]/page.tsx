"use client"

import React, { useState } from "react";
import AnimalCard from "../../../../components/petPhotoCard";
import TabMenu from "../../../../components/petDetailTabmenu";
import LetterModal from "../../../../components/letterModal";
import LetterList from "../../../../components/activity/letterList";
import PostList from "../../../../components/activity/postList";
import { Letter } from "../../../../types/letter";
import { Container, ContentWrapper } from "./styles";

const MemoryPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"letter" | "memory">("letter");
    const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTabChange = (tab: "letter" | "memory") => {
        setActiveTab(tab);
    };

    const handleLetterClick = (letter: Letter) => {
        setSelectedLetter(letter);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedLetter(null);
    };

    return (
        <Container>
            <AnimalCard />
            <ContentWrapper>
                <TabMenu activeTab={activeTab} setActiveTab={handleTabChange} />
                {activeTab === "letter" && (
                    <LetterList
                        activeTab={activeTab}
                        onLetterClick={handleLetterClick}
                    />
                )}

                {activeTab === "memory" && (
                    <PostList
                        activeTab={activeTab}
                    />
                )}
            </ContentWrapper>

            {isModalOpen && selectedLetter && (
                <LetterModal letter={selectedLetter} onClose={handleCloseModal} />
            )}
        </Container>
    );
};

export default MemoryPage;
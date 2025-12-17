import React from "react";
import { CategoryButton, CategoryWrapper } from "./styles";

interface CategoryBarProps {
    activeTab: 'memory' | 'info';
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({ activeTab, activeCategory, onSelectCategory }) => {
    // 탭별 카테고리 목록
    const categories = {
        memory: ["전체", "강아지", "고양이", "어류", "조류", "파충류", "기타"],
        info: ["전체", "장소", "보험", "장례", "기타"],
    };

    return (
        <CategoryWrapper>
            {categories[activeTab].map((c) => (
                <CategoryButton
                    key={c}
                    $active={c === activeCategory}
                    onClick={() => onSelectCategory(c)}
                >{c}
                </CategoryButton>
            ))}
        </CategoryWrapper>
    );
};
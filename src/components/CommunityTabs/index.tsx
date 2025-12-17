import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface TabsProps {
    activeTab: 'memory' | 'info';
    onChange: (key: 'memory' | 'info') => void;
}

export const CommunityTabs: React.FC<TabsProps> = ({ activeTab, onChange }) => {
    const tabs = [
        { key: "memory", label: "추억 저장소", href: "/community/memory" },
        { key: "info", label: "정보 공유", href: "/community/info" },
    ] as const;

    return (
        <TabsWrapper>
            {tabs.map((t) => (
                <Link key={t.key} href={t.href}>
                    <TabButton
                        $active={activeTab === t.key}
                        onClick={() => onChange(t.key)}
                        aria-selected={activeTab === t.key}
                    >
                        {t.label}
                    </TabButton>
                </Link>
            ))}
        </TabsWrapper>
    );
};

const TabsWrapper = styled.div`
  display: flex;
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 6px 8px;
  color: ${({ $active }) => ($active ? "#AFCBFB" : "#7D8799")};
  background: none;
  border: none;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  width: 164px;
  height: 48px;
  border-bottom: ${({ $active }) =>
        $active ? "2px solid #AFCBFB" : "1px solid #2A2F39"};
`;
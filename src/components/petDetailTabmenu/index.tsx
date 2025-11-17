import React from "react";
import { Tab, TabMenuWrapper } from "./styles";

interface TabMenuProps {
    activeTab: "letter" | "memory";
    setActiveTab: (tab: "letter" | "memory") => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ activeTab, setActiveTab }) => {
    return (
        <TabMenuWrapper>
            <Tab $active={activeTab === "letter"} onClick={() => setActiveTab("letter")}>
                편지
            </Tab>
            <Tab $active={activeTab === "memory"} onClick={() => setActiveTab("memory")}>
                내 추억 글
            </Tab>
        </TabMenuWrapper>
    );
};

export default TabMenu;


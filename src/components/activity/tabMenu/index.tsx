"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tab, TabMenuWrapper } from "./styles";

const tabs = [
    { name: "편지", href: "/mypage/activity/letters" },
    { name: "게시글", href: "/mypage/activity/posts" },
    { name: "댓글", href: "/mypage/activity/comments" },
];

const TabMenu = () => {
    const pathname = usePathname();

    return (
        <TabMenuWrapper>
            {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                    <Tab key={tab.name} $active={isActive}>
                        <Link href={tab.href}>{tab.name}</Link>
                    </Tab>
                );
            })}
        </TabMenuWrapper>
    );
};

export default TabMenu;

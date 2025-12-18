"use client";

import React, { useState } from "react";
import OnboardingContent from "../../components/OnBoarding/OnBoardingContent";
import Pagination from "../../components/OnBoarding/Pagination";
import NavigationButton from "../../components/OnBoarding/Button";
import { Container, FadeWrapper } from "./styles";

const ONBOARDING_DATA = [
    {
        title: "반려동물과의 추억을\n별자리로 기록해요",
        description: "반려동물과 함께 했던 추억을 돌아보며 별자리에 기록할 수 있어요. 별자리를 누르면 기록한 별자리를 볼 수 있답니다!",
        image: "/onboarding/1.svg",
    },
    {
        title: "다른 사람들과 추억을 둘러보아요",
        description: "나의 추억을 다른 이들에게 보여줄 수도 있고,\n다른 이의 추억을 구경할 수도 있어요.",
        image: "/onboarding/2.svg",

    },
    {
        title: "반려동물과 관련된 정보를\n공유해요",
        description: "반려동물 병원, 보험 등 정보 등을 알아갈 수 있어요.",
        image: "/onboarding/3.svg",
    },
];

export default function OnboardingPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const isLastPage = currentPage === ONBOARDING_DATA.length - 1;

    const handleNext = () => {
        if (isLastPage) {
            console.log("시작하기");
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    };
    return (
        <Container>
            <main>
                <FadeWrapper key={currentPage}>
                    <OnboardingContent data={ONBOARDING_DATA[currentPage]} />
                </FadeWrapper>
            </main>
            <Pagination total={ONBOARDING_DATA.length} current={currentPage} />
            <NavigationButton
                label={isLastPage ? "시작하기" : "다음으로"}
                onClick={handleNext}
            />
        </Container>
    );
}
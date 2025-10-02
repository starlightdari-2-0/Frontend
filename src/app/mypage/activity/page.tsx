"use client";

import { redirect } from "next/navigation";

export default function MyActivityPage() {  // 기본: 편지 탭으로 리다이렉트
    redirect("/mypage/activity/letters");
}

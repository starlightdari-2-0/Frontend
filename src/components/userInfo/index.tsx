"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container, UserImage, Info, Nickname, ChangeBtn, SkeletonUI } from "./styles";
import { useRouter } from "next/navigation";

interface UserData {
    nickname: string;
    profile_img: string;
}

const mockUserData = {
    nickname: "젬마",
    profile_img: "https://place-puppy.com/80x80",
};

// 유저 닉네임, 프로필 사진 받아오기
const getUserInfo = async (): Promise<UserData> => {
    const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
    const response = await axios.get(`http://${server_url}:8080/member`, {
        withCredentials: true,
        headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    return response.data;

    // // Mock 데이터 반환 (1초 지연)
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // return mockUserData;
};

const UserInfo = () => {
    const router = useRouter();

    const { data: userData, isLoading, isError } = useQuery<UserData>({
        queryKey: ["userInfo"],
        queryFn: getUserInfo,
    });


    // 로딩 시 스켈레톤 UI 변경 필요
    // if (loading) {
    //     return <SkeletonUI />;
    // }

    if (isError || !userData) {
        return <h1>로그인에 실패하였습니다.</h1>;
    }

    return (
        <Container>
            <Info>
                <UserImage
                    src={userData.profile_img}
                    alt="user photo"
                    width={70}
                    height={70}
                    unoptimized
                />
                <Nickname>{userData.nickname}</Nickname>
            </Info>
            <ChangeBtn onClick={() => router.push("/mypage/edit")}>변경하기</ChangeBtn>
        </Container>
    );
};


export default UserInfo;

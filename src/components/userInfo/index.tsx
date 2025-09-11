"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, UserImage, Info, Nickname, ChangeBtn, SkeletonUI } from "./styles";

interface UserData {
    nickname: string;
    profile_img: string;
}

const UserInfo = () => {
    const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    const mockUserData = {
        nickname: "젬마",
        profile_img: "https://place-puppy.com/80x80",
    };

    // 유저 닉네임, 프로필 사진 받아오기
    // const getUserInfo = async () => {
    //   try {
    //     const response = await axios({
    //       method: "GET",
    //       url: `http://${server_url}:8080/member`,
    //       withCredentials: true,
    //       headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //       },
    //     });

    //     console.log("서버 응답:", response);

    //     setUserData(response.data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("유저 정보 요청 중 오류 발생:", error);
    //     setLoading(false);
    //   }
    // };

    const getUserInfo = async () => {
        // axios 호출 대신 Mock 데이터를 사용
        try {
            // 실제 API 호출을 주석 처리하거나 제거
            // const response = await axios({ ... });

            // API 지연을 흉내내기 위한 setTimeout
            setTimeout(() => {
                setUserData(mockUserData);
                setLoading(false);
            }, 1000); // 1초 지연
        } catch (error) {
            console.error("유저 정보 요청 중 오류 발생:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);


    // 유저 닉네임 변경
    // const saveUserNickname = async () => {
    //   try {
    //     const response = await axios({
    //       method: "PUT",
    //       url: `http://${server_url}:8080/member/name`,
    //       withCredentials: true,
    //       headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //       },
    //       data: {
    //         nickname: nickname,
    //       },
    //     });

    //     console.log("서버 응답:", response);
    //   } catch (error) {
    //     console.error("유저 닉네임 수정 중 오류 발생:", error);
    //   }
    //   setIsEditingNickname(false);
    //   await getUserInfo();
    // };

    // 로딩 시 스켈레톤 UI 변경 필요
    // if (loading) {
    //     return <SkeletonUI />;
    // }

    if (!userData) {
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
            <ChangeBtn>변경하기</ChangeBtn>
        </Container>
    );
};


export default UserInfo;

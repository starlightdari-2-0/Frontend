"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import X from "/public/inputbox_X.svg";
import { BackButton, CharCount, ClearButton, Container, Header, Input, InputWrapper, Label, ProfileImage, SubmitButton, Title } from "./styles";
import { useRouter } from "next/navigation";

const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

const ProfileEdit = () => {
    const router = useRouter();
    const [nickname, setNickname] = useState("");
    const [isEditingNickname, setIsEditingNickname] = useState(true);
    const maxLength = 20;

    const saveUserNickname = async () => {
        try {
            const response = await axios({
                method: "PUT",
                url: `${server_url}/member/name`,
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                data: {
                    nickname: nickname,
                },
            });

            console.log("서버 응답:", response);
        } catch (error) {
            console.error("유저 닉네임 수정 중 오류 발생:", error);
        }
        setIsEditingNickname(false);
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={() => router.push("/mypage/myInfo")}>{"<"}</BackButton>
                <Title>프로필 편집</Title>
            </Header>

            <ProfileImage />

            <Label>
                닉네임 <CharCount>{nickname.length} / <span style={{ color: "#5D636F" }}>{maxLength}</span></CharCount>
            </Label>

            <InputWrapper>
                <Input
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value.slice(0, maxLength))}
                    placeholder="닉네임을 입력하세요"
                />
                {nickname && (
                    <ClearButton onClick={() => setNickname("")}><Image src={X} alt="X" /></ClearButton>
                )}
            </InputWrapper>

            <SubmitButton onClick={saveUserNickname}>변경하기</SubmitButton>
        </Container>
    );
};

export default ProfileEdit;

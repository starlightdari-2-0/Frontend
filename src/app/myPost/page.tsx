"use client";

import React from "react";
import { PostType } from "../../types/postType";
import Header from "../../components/header";
import { Post } from "../../components/post";
import { Container } from "./styles";

const mockPost: PostType = {
    id: 1,
    author: "닉네임",
    title: "제목제목",
    content: "내용이 길어지면 스크롤되는 그런 방식...",
    imageUrl: "/maru.svg",
    date: "2025.08.25",
    likes: {
        like1: 1,
        like2: 0,
        like3: 0,
    },
    comments: [
        {
            id: 1,
            author: "닉네임",
            content: "댓글 내용",
            date: "2025.08.25",
            replies: [
                {
                    id: 2,
                    author: "닉네임",
                    content: "대댓글 내용",
                    date: "2025.08.25",
                },
                {
                    id: 3,
                    author: "닉네임",
                    content: "대댓글 달았어요",
                    date: "2025.08.26",
                },
            ],
        },
    ],
};

const MyPost = () => {
    return (
        <Container>
            <Header title="내 추억글" backUrl="" />
            <Post post={mockPost} />
        </Container>
    );
}

export default MyPost;

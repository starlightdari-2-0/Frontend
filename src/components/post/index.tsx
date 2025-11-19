"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PostType } from "../../types/postType";
import { Comment } from "../comment";
import { PostWrapper, PostImage, Author, LikeButton, Header, AuthorImage, Nickname, More, Body, ContentWrapper, Title, Content, Footer, LikeSection, Count, CommentInputContainer, SubmitButton, CommentInput, NoComment } from "./styles";
import comment from "/public/myComment.svg";
import more from "/public/comment_more.svg";
import send from "/public/send_comment.svg";

interface PostProps {
    post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
    const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

    const [likes, setLikes] = useState(post.likes);
    const [newComment, setNewComment] = useState("");


    const toggleLike = (type: "like1" | "like2" | "like3") => {
        setLikes((prev) => ({
            ...prev,
            [type]: prev[type] === 0 ? 1 : 0,
        }));
    };
    //     const addComment = async (content: string) => {
    //         try {
    //           const response = await axios({
    //             method: "POST",
    //             url: `${server_url}/memory-stars/comment`,
    //             withCredentials: true,
    //             data: {
    //               content: content,
    //               memory_id: memoryId,
    //             },
    //           });

    //           console.log("서버 응답:", response);
    //           fetchComments(memoryId);
    //           getStarInfo();
    //         } catch (error) {
    //           console.error("댓글 작성 중 오류 발생:", error);
    //         }
    //       };

    //       const handleAddComment = () => {
    //     if (newComment.trim()) {
    //       addComment(newComment);
    //       setNewComment("");
    //     }
    //   };
    //   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter" && !event.shiftKey) {
    //       event.preventDefault();
    //       handleAddComment();
    //     }
    //   };
    return (
        <PostWrapper>
            <Header>
                {/* 글쓴이 이미지 받아와야 함 */}
                <Author><AuthorImage src={"/maru.svg"} alt="" width={36} height={36} />
                    <Nickname>{post.author}</Nickname></Author> <More><Image src={more} alt="" width={48} height={48} /></More>
            </Header>
            <Body>
                <ContentWrapper>
                    <Title>{post.title}</Title>
                    <Content>{post.content}</Content>
                </ContentWrapper>
                {post.imageUrl && <PostImage src={post.imageUrl} alt="" width={328} height={328} />}
            </Body>
            <Footer>
                <LikeSection>
                    <LikeButton $active={likes.like1 === 1} onClick={() => toggleLike("like1")}>
                        🥰 {likes.like1}
                    </LikeButton>
                    <LikeButton $active={likes.like2 === 1} onClick={() => toggleLike("like2")}>
                        😮 {likes.like2}
                    </LikeButton>
                    <LikeButton $active={likes.like3 === 1} onClick={() => toggleLike("like3")}>
                        😢 {likes.like3}
                    </LikeButton>
                </LikeSection>
                <Count><Image src={comment} alt="" width={24} height={24} /> 0</Count>
            </Footer>
            {/* 이 사이에 검은색 구분선 넣어야 함 */}
            <CommentInputContainer>
                <CommentInput
                    type="text"
                    placeholder="댓글을 입력하세요..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                // onKeyDown={handleKeyDown}
                />
                {/* <SubmitButton onClick={handleAddComment}><Image src={send} alt=""/></SubmitButton> */}
                <SubmitButton><Image src={send} alt="" /></SubmitButton>
            </CommentInputContainer>
            <div>
                {post.comments.length > 0 ? (
                    post.comments.map((comment) => <Comment key={comment.id} comment={comment} />)
                ) : (
                    <NoComment>아직 댓글이 없어요. <br />가장 먼저 댓글을 남겨보세요.</NoComment>
                )}
            </div>
        </PostWrapper>
    );
};

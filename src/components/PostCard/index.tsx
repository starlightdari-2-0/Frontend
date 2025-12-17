import React, { useState } from "react";
import Image from "next/image";
import { PostWrapper, PostImage, Author, LikeButton, Header, AuthorImage, Nickname, More, Body, ContentWrapper, Title, Content, Footer, LikeSection, Count } from "./styles";
import { PostPreviewType } from "../../types/postPreviewType";
import comment from "/public/myComment.svg";
import more from "/public/comment_more.svg";

interface PostCardProps {
    post: PostPreviewType;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const [likes, setLikes] = useState(post.likes);

    const toggleLike = (type: "like1" | "like2" | "like3") => {
        setLikes((prev) => ({
            ...prev,
            [type]: prev[type] === 0 ? 1 : 0,
        }));
    };
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
        </PostWrapper>
    );
};
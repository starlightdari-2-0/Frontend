"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { Comment } from "../comment";
import { PostWrapper, PostImage, Author, LikeButton, Header, AuthorImage, Nickname, More, Body, ContentWrapper, Title, Content, Footer, LikeSection, Count, CommentInputContainer, SubmitButton, CommentInput, NoComment } from "./styles";
import comment from "/public/myComment.svg";
import more from "/public/comment_more.svg";
import send from "/public/send_comment.svg";
import { useGetLoginedUserId } from "../../api/generated/member-controller/member-controller";
import { useCreateLikeMemoryStar, useDeleteLikeMemoryStar, useSelectMemoryStarByMemId } from "../../api/generated/memory-star-controller/memory-star-controller";
import { useCreateMemComment, useDeleteMemComment, useGetMemComment, useUpdateMemComment } from "../../api/generated/mem-comment-controller/mem-comment-controller";
import { MemoryStarRepDto } from "../../api/generated/model";

interface PostProps {
    post: MemoryStarRepDto;
}

export const Post: React.FC<PostProps> = ({ post }) => {
    const commentInputRef = useRef<HTMLInputElement>(null);
    const [newComment, setNewComment] = useState("");
    // 어떤 댓글에 답글을 다는지 저장 (null이면 일반 댓글, id가 있으면 대댓글)
    const [replyTo, setReplyTo] = useState<{ id: number; name: string } | null>(null);
    const memoryId = post.memory_id!;
    // 1. 유저 정보 및 포스트 상세 데이터 가져오기
    const { data: loginUserId } = useGetLoginedUserId();
    const { data: starData, refetch: refetchStarInfo } = useSelectMemoryStarByMemId(memoryId);
    const { data: rawComments, refetch: refetchComments } = useGetMemComment(memoryId);
    const currentPost = starData || post;

    // 2. 좋아요 관련 Mutation 훅
    const { mutate: addLike } = useCreateLikeMemoryStar();
    const { mutate: cancelLike } = useDeleteLikeMemoryStar();

    // 3. 댓글 작성 Mutation 훅
    const { mutate: createComment } = useCreateMemComment({
        mutation: {
            onSuccess: () => {
                setNewComment("");
                setReplyTo(null);
                refetchComments(); // 목록 갱신
                refetchStarInfo(); // 댓글 개수 갱신
            }
        }
    });

    // 4. 댓글 삭제 Mutation 훅
    const { mutate: deleteCommentAction } = useDeleteMemComment({
        mutation: {
            onSuccess: () => {
                refetchComments();
                refetchStarInfo();
            }
        }
    });

    // 5. 댓글 수정 Mutation 훅
    const { mutate: saveCommentAction } = useUpdateMemComment({
        mutation: {
            onSuccess: () => refetchComments()
        }
    });

    // 좋아요 토글 로직 대체
    const toggleLike = (type: "LIKE1" | "LIKE2" | "LIKE3") => {
        const isCurrentlyLiked = currentPost.reactions?.[type]?.isLiked;

        if (isCurrentlyLiked) {
            cancelLike({ memoryId, type }, { onSuccess: () => refetchStarInfo() });
        } else {
            addLike({ memoryId, type }, { onSuccess: () => refetchStarInfo() });
        }
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            createComment({
                data: {
                    content: newComment.trim(),
                    memory_id: memoryId,
                    parent_id: replyTo ? replyTo.id : null,
                }
            });
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleAddComment();
        }
    };

    const handleReplyClick = (id: number, name: string) => {
        setReplyTo({ id, name });
        if (commentInputRef.current) {
            commentInputRef.current.focus();
            commentInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    // 1. organizedComments: 평면 데이터를 계층 구조(대댓글)로 가공
    const organizedComments = useMemo(() => {
        const commentList = rawComments?.content || [];
        const map = new Map();
        const roots: any[] = [];

        commentList.forEach((c: any) => {
            map.set(c.comment_id, { ...c, replies: [] });
        });

        // 부모-자식 관계 연결
        map.forEach((c) => {
            if (c.parent_id) {
                const parent = map.get(c.parent_id);
                if (parent) parent.replies.push(c);
            } else {
                roots.push(c);
            }
        });

        return roots;
    }, [rawComments]);
    console.log("가공된 댓글:", organizedComments);

    return (
        <PostWrapper>
            <Header>
                {/* 글쓴이 이미지 받아와야 함 */}
                <Author><AuthorImage src={"/maru.svg"} alt="" width={36} height={36} />
                    <Nickname>{currentPost.writer_name}</Nickname></Author> <More><Image src={more} alt="" width={48} height={48} /></More>
            </Header>
            <Body>
                <ContentWrapper>
                    <Title>{currentPost.name}</Title>
                    <Content>{currentPost.content}</Content>
                </ContentWrapper>
                {currentPost.img_url && <PostImage src={currentPost.img_url} alt="" width={328} height={328} />}
            </Body>
            <Footer>
                <LikeSection>
                    <LikeButton $active={currentPost.reactions?.["LIKE1"]?.isLiked ?? false} onClick={() => toggleLike("LIKE1")}>
                        🥰 {currentPost.reactions?.["LIKE1"]?.count || 0}
                    </LikeButton>
                    <LikeButton $active={currentPost.reactions?.["LIKE2"]?.isLiked ?? false} onClick={() => toggleLike("LIKE2")}>
                        😮 {currentPost.reactions?.["LIKE2"]?.count || 0}
                    </LikeButton>
                    <LikeButton $active={currentPost.reactions?.["LIKE3"]?.isLiked ?? false} onClick={() => toggleLike("LIKE3")}>
                        😢 {currentPost.reactions?.["LIKE3"]?.count || 0}
                    </LikeButton>
                </LikeSection>
                <Count>comment
                    <Image src={comment} alt="" width={24} height={24} /> {currentPost.commentNumber || 0}
                </Count>
            </Footer>
            {/* 이 사이에 검은색 구분선 넣어야 함 */}
            <CommentInputContainer>
                {replyTo && (
                    <div style={{ fontSize: "12px", color: "gray", marginBottom: "4px" }}>
                        <span>{replyTo.name}님께 답글 남기는 중...</span>
                        <button onClick={() => setReplyTo(null)}>취소</button>
                    </div>
                )}
                <CommentInput
                    ref={commentInputRef}
                    type="text"
                    placeholder={replyTo ? "답글을 입력하세요..." : "댓글을 입력하세요..."}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <SubmitButton onClick={handleAddComment}><Image src={send} alt="" /></SubmitButton>
            </CommentInputContainer>
            <div>
                {organizedComments.length > 0 ? (
                    organizedComments.map((comment) => (
                        <Comment
                            key={comment.comment_id}
                            comment={comment}
                            currentUserId={loginUserId}
                            onReply={handleReplyClick}
                            onDelete={(id) => deleteCommentAction({ commentId: id })}
                            onSave={(id, content) => saveCommentAction({ data: { comment_id: id, content } })}
                        />
                    ))
                ) : (
                    <NoComment>아직 댓글이 없어요. <br />가장 먼저 댓글을 남겨보세요.</NoComment>
                )}
            </div>
        </PostWrapper>
    );
};

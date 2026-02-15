"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { PostType } from "../../types/postType";
import { Comment } from "../comment";
import axios from "axios";
import { PostWrapper, PostImage, Author, LikeButton, Header, AuthorImage, Nickname, More, Body, ContentWrapper, Title, Content, Footer, LikeSection, Count, CommentInputContainer, SubmitButton, CommentInput, NoComment } from "./styles";
import comment from "/public/myComment.svg";
import more from "/public/comment_more.svg";
import send from "/public/send_comment.svg";
import { useGetLoginedUserId } from "../../api/generated/member-controller/member-controller";
import { useCreateLikeMemoryStar, useDeleteLikeMemoryStar, useSelectMemoryStarByMemId } from "../../api/generated/memory-star-controller/memory-star-controller";
import { useCreateMemComment, useDeleteMemComment, useGetMemComment, useUpdateMemComment } from "../../api/generated/mem-comment-controller/mem-comment-controller";

interface PostProps {
    post: PostType;
}

/////////////////////////////////////
// 좋아요 로직 잘 됐는지 확인, 댓글 로직 잘 됐는지 확인,
// fetchComments 삭제했으니까 Optimistic UI 적용하게 바꿔야 함
// api 타입 맞춰야 함
/////////////////////////////////////


export const Post: React.FC<PostProps> = ({ post }) => {
    // const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
    const commentInputRef = useRef<HTMLInputElement>(null);

    // const [likes, setLikes] = useState(post.likes);
    const [newComment, setNewComment] = useState("");
    // 어떤 댓글에 답글을 다는지 저장 (null이면 일반 댓글, id가 있으면 대댓글)
    const [replyTo, setReplyTo] = useState<{ id: number; name: string } | null>(null);
    // 1. 유저 정보 및 포스트 상세 데이터 가져오기
    const { data: loginUserId } = useGetLoginedUserId();
    const { data: starData, refetch: refetchStarInfo } = useSelectMemoryStarByMemId(post.id);
    const { data: rawComments, refetch: refetchComments } = useGetMemComment(post.id);

    // 2. 좋아요 관련 Mutation 훅
    const { mutate: addLike } = useCreateLikeMemoryStar();
    const { mutate: cancelLike } = useDeleteLikeMemoryStar();

    // 3. 댓글 작성 Mutation 훅
    const { mutate: createComment } = useCreateMemComment({
        mutation: {
            onSuccess: () => {
                setNewComment("");
                refetchStarInfo(); // 댓글 작성 후 데이터 갱신
            }
        }
    });

    // 4. 댓글 삭제 Mutation 훅
    const { mutate: deleteComment } = useDeleteMemComment({
        mutation: {
            onSuccess: () => {
                refetchComments(); // 댓글 삭제 후 데이터 갱신
            }
        }
    });

    // 5. 댓글 수정 Mutation 훅
    const { mutate: saveComment } = useUpdateMemComment({
        mutation: {
            onSuccess: () => {
                refetchComments(); // 댓글 수정 후 데이터 갱신
            }
        }
    });

    // 좋아요 토글 로직 대체
    const toggleLike = (type: "LIKE1" | "LIKE2" | "LIKE3") => {
        const isCurrentlyLiked = starData?.reactions?.[type]?.isLiked;

        if (isCurrentlyLiked) {
            cancelLike({ memoryId: post.id, type }, { onSuccess: () => refetchStarInfo() });
        } else {
            addLike({ memoryId: post.id, type }, { onSuccess: () => refetchStarInfo() });
        }
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            createComment({
                data: {
                    content: newComment.trim(),
                    memory_id: post.id,
                    parent_id: replyTo ? replyTo.id : null,
                }
            }, {
            onSuccess: () => {
                setNewComment("");
                setReplyTo(null); // 전송 후 답글 모드 해제
                refetchComments();
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

    // 1. organizedComments: 평면 데이터를 계층 구조(대댓글)로 가공
    const organizedComments = useMemo(() => {
        if (!rawComments?.content) return []; // Orval/Swagger 구조에 따라 content 확인

        const map = new Map();
        const roots: any[] = [];

        // 모든 댓글을 Map에 등록 (replies 배열 초기화)
        rawComments.content.forEach((c: any) => {
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

    // 2. 답글 달기 클릭 시 포커스 로직
    const handleReplyClick = (id: number, name: string) => {
        setReplyTo({ id, name });
        
        // 입력창으로 스무스하게 포커스 이동
        if (commentInputRef.current) {
            commentInputRef.current.focus();
            // 필요한 경우 스크롤 이동
            commentInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };
    // const [loginUserId, setLoginUserId] = useState<number | null>(null);
    // const [starPage, setStarPage] = useState<any | null>(null);
    // const [comments, setComments] = useState(post.comments || []);

    // const toggleLike = async (type: "like1" | "like2" | "like3") => {
    //     const reactionType = reactionTypeMap[type];
    //     const isCurrentlyLiked = likes[type] === 1;

    //     if (isCurrentlyLiked) {
    //         await cancelLike(reactionType);
    //     } else {
    //         await addLike(reactionType);
    //     }

    //     setLikes((prev) => ({
    //         ...prev,
    //         [type]: prev[type] === 0 ? 1 : 0,
    //     }));
    // };

    // const getLoginUserId = async () => {
    //     try {
    //         const response = await axios({
    //             method: "GET",
    //             url: `${server_url}/member/logined`,
    //             withCredentials: true,
    //         });
    //         setLoginUserId(response.data);
    //     } catch (error) {
    //         console.error("로그인된 유저 정보 요청 중 오류 발생:", error);
    //     }
    // };

    // const getStarInfo = async () => {
    //     try {
    //         const response = await axios({
    //             method: "GET",
    //             url: `${server_url}/memory-stars/${post.id}`,
    //             withCredentials: true,
    //         });
    //         setStarPage(response.data.memoryStarRepDto);
    //         setComments(response.data.memComments || []);
    //     } catch (error) {
    //         console.error("별 기록 요청 중 오류 발생:", error);
    //     }
    // };

    // const reactionTypeMap: Record<"like1" | "like2" | "like3", string> = {
    //     like1: "LIKE1",
    //     like2: "LIKE2",
    //     like3: "LIKE3",
    // };

    // const addLike = async (reactionType: string) => {
    //     try {
    //         await axios({
    //             method: "POST",
    //             url: `${server_url}/memory-stars/${post.id}/reactions/${reactionType}`,
    //             withCredentials: true,
    //         });
    //         getStarInfo();
    //     } catch (error) {
    //         console.error("좋아요 클릭 중 오류 발생:", error);
    //     }
    // };

    // const cancelLike = async (reactionType: string) => {
    //     try {
    //         await axios({
    //             method: "DELETE",
    //             url: `${server_url}/memory-stars/${post.id}/reactions/${reactionType}`,
    //             withCredentials: true,
    //         });
    //         getStarInfo();
    //     } catch (error) {
    //         console.error("좋아요 취소 중 오류 발생:", error);
    //     }
    // };

    // const addComment = async (content: string, parentId: number | null = null) => {
    //     try {
    //         const response = await axios({
    //             method: "POST",
    //             url: `${server_url}/memory-comments`,
    //             withCredentials: true,
    //             data: {
    //                 content: content,
    //                 memory_id: post.id,
    //                 parent_id: parentId,
    //             },
    //         });
    //         getStarInfo(); 
    //         setNewComment("");
    //     } catch (error) {
    //         console.error("댓글 작성 중 오류 발생:", error);
    //     }
    // };

    // const saveComment = async (commentId: number, content: string) => {
    //     try {
    //         const response = await axios({
    //             method: "PUT",
    //             url: `${server_url}/memory-comments`,
    //             withCredentials: true,
    //             data: {
    //                 content: content,
    //                 comment_id: commentId,
    //             },
    //         });
    //         setComments((prev) =>
    //             prev.map((comment) =>
    //                 comment.comment_id === commentId ? response.data : comment
    //             )
    //         );
    //     } catch (error) {
    //         console.error("댓글 수정 중 오류 발생:", error);
    //     }
    // };

    // const deleteComment = async (commentId: number) => {
    //     try {
    //         await axios({
    //             method: "DELETE",
    //             url: `${server_url}/memory-comments/${commentId}`,
    //             withCredentials: true,
    //         });
    //         setComments((prev) =>
    //             prev.filter((comment) => comment.comment_id !== commentId)
    //         );
    //     } catch (error) {
    //         console.error("댓글 삭제 중 오류 발생:", error);
    //     }
    // };

    // useEffect(() => {
    //     if (server_url) {
    //         getLoginUserId();
    //         getStarInfo();
    //     }
    // }, [server_url]);

    // const handleAddComment = () => {
    //     if (newComment.trim()) {
    //         addComment(newComment.trim());
    //         setNewComment("");
    //     }
    // };

    // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter" && !event.shiftKey) {
    //         event.preventDefault();
    //         handleAddComment();
    //     }
    // };

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
                    <LikeButton $active={starData?.reactions?.LIKE1?.isLiked ?? false} onClick={() => toggleLike("LIKE1")}>
                        🥰 {starData?.reactions?.LIKE1?.count || 0}
                    </LikeButton>
                    <LikeButton $active={starData?.reactions?.LIKE2?.isLiked ?? false} onClick={() => toggleLike("LIKE2")}>
                        😮 {starData?.reactions?.LIKE2?.count || 0}
                    </LikeButton>
                    <LikeButton $active={starData?.reactions?.LIKE3?.isLiked ?? false} onClick={() => toggleLike("LIKE3")}>
                        😢 {starData?.reactions?.LIKE3?.count || 0}
                    </LikeButton>
                </LikeSection>
                <Count>
                    <Image src={comment} alt="" width={24} height={24} /> {starData?.commentNumber || 0}
                </Count>
            </Footer>
            {/* 이 사이에 검은색 구분선 넣어야 함 */}
            <CommentInputContainer>
                {replyTo && (
                    <div style={{ fontSize: "12px", color: "gray", marginBottom: "4px" }}>
                        {replyTo.name}님께 답글 남기는 중... 
                        <button onClick={() => setReplyTo(null)}>취소</button>
                    </div>
                )}
                <CommentInput
                    type="text"
                    placeholder={replyTo ? "답글을 입력하세요..." : "댓글을 입력하세요..."}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <SubmitButton onClick={handleAddComment}><Image src={send} alt="" /></SubmitButton>
            </CommentInputContainer>
            <div>
                
                {organizedComments && organizedComments.length > 0 ? (
                    organizedComments.map((comment) => (
                <Comment
                    key={comment.comment_id}
                    comment={comment}
                    currentUserId={loginUserId}
                    onReply={handleReplyClick}
                    onDelete={() => deleteComment({ commentId: comment.comment_id })}
                    onSave={(id: number, content: string) => saveComment({ data: { comment_id: id, content } })}
                        />
            ))
                ) : (
                    <NoComment>아직 댓글이 없어요. <br />가장 먼저 댓글을 남겨보세요.</NoComment>
                )}
            </div>
        </PostWrapper>
    );
};

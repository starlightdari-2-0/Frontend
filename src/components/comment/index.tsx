import React, { useState } from "react";
import { CommentType } from "../../types/commentType";
import Image from "next/image";
import more from "/public/comment_more.svg";
import like from "/public/comment_like.svg";
import re from "/public/comment_re.svg";
import icon from "/public/comment_reply_icon.svg";
import { CommentWrapper, Header, AuthorImage, Content, Nickname, Date, Bottom, Reaction, Item, More, Reply } from "./styles";

interface CommentProps {
    comment: CommentType;
    currentUserId?: number | null;
    onDelete?: (id: number) => void;
    onSave?: (id: number, content: string) => void;
    // 답글 달기 버튼 클릭 시 호출될 콜백 추가
    onReply?: (id: number, name: string) => void;
}

export const Comment: React.FC<CommentProps> = ({ comment, currentUserId = null, onDelete, onSave, onReply }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState<string>(comment.content || "");

    const writerName = comment.writer_name || "";
    const dateText = comment.date || "";
    const commentId = comment.comment_id;
    const writerId = comment.writer_id;
    const isOwner = currentUserId !== null && writerId === currentUserId;

    const handleSave = () => {
        if (onSave && commentId) {
            onSave(commentId, editText);
        }
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (onDelete && commentId != null) onDelete(commentId);
    };

    return (
        <CommentWrapper>
            <Header>
                {/* 댓글쓴이 이미지 받아와야 함 */}
                <AuthorImage src={"/maru.svg"} alt="" width={36} height={36} />
                <Nickname>{writerName}</Nickname> {comment.date && <Date>{comment.date}</Date>}
            </Header>

            <div>
                {isEditing ? (
                    <>
                        <Content>
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                style={{ width: "100%", padding: 8, borderRadius: 6, border: "none" }}
                            />
                        </Content>
                        <Bottom>
                            <Reaction />
                            <div style={{ display: "flex", gap: 8 }}>
                                <button onClick={handleSave}>저장</button>
                                <button onClick={() => setIsEditing(false)}>취소</button>
                            </div>
                        </Bottom>
                    </>
                ) : (
                    <>
                        <Content>{comment.content}</Content>
                        <Bottom>
                            <Reaction>
                                <Item>
                                    <Image src={like} alt="" width={24} height={24} /> {comment.like_count || 0}
                                </Item>
                                <Item onClick={() => onReply?.(commentId, writerName)}
                                    style={{ cursor: "pointer" }}>
                                    <Image src={re} alt="" width={24} height={24} /> 답글 달기
                                </Item>
                            </Reaction>
                            <More>
                                <Image src={more} alt="" width={48} height={48} />
                                {isOwner && (
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <button onClick={() => setIsEditing(true)}>편집</button>
                                        <button onClick={() => onDelete?.(commentId)}>삭제</button>
                                    </div>
                                )}
                            </More>
                        </Bottom>
                    </>
                )}
            </div>

            {comment.replies && comment.replies.length > 0 && (
                <>
                    {comment.replies.map((reply: any) => (
                        <Reply key={reply.comment_id || reply.id}>
                            <Image src={icon} alt="" width={24} height={24} />
                            <Comment comment={reply} currentUserId={currentUserId} onDelete={onDelete} onSave={onSave} onReply={onReply} />
                        </Reply>
                    ))}
                </>
            )}
        </CommentWrapper>
    );
};

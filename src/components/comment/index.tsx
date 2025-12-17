import React from "react";
import { CommentType } from "../../types/commentType";
import Image from "next/image";
import more from "/public/comment_more.svg";
import like from "/public/comment_like.svg";
import re from "/public/comment_re.svg";
import icon from "/public/comment_reply_icon.svg";
import { CommentWrapper, Header, AuthorImage, Content, Nickname, Date, Bottom, Reaction, Item, More, Reply } from "./styles";

interface CommentProps {
    comment: CommentType;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {

    return (
        <CommentWrapper>
            <Header>
                {/* 댓글쓴이 이미지 받아와야 함 */}
                <AuthorImage src={"/maru.svg"} alt="" width={36} height={36} />
                <Nickname>{comment.author}</Nickname> <Date>{comment.date}</Date>
            </Header>
            <div>
                <Content>{comment.content}</Content>
                <Bottom><Reaction><Item><Image src={like} alt="" width={24} height={24} /> 1</Item><Item><Image src={re} alt="" width={24} height={24} /> 답글 달기</Item></Reaction><More><Image src={more} alt="" width={48} height={48} /></More></Bottom>
            </div>

            {comment.replies && comment.replies.length > 0 && (
                <>
                    {comment.replies.map((reply) => (
                        <Reply key={reply.id}>
                            <Image src={icon} alt="" width={24} height={24} />
                            <Comment key={reply.id} comment={reply} />
                        </Reply>
                    ))}
                </>
            )}
        </CommentWrapper>
    );
};

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Content, ContentImage, Like, List, ListItem, Meta, SubMeta } from "./styles";
import Image from "next/image";
import like from "/public/like_L.svg";
import comment from "/public/myComment.svg";

interface PostListProps {
  activeTab?: "letter" | "memory";
  openModal?: () => void;
}

const dummyPosts = [
  { id: 1, title: "제목제목제목", date: "2025.08.25", author: "후추자리", likes: 3, comments: 5 },
  { id: 2, title: "새로운 글 제목", date: "2025.08.22", author: "후추자리", likes: 1, comments: 2 },
];

const PostList: React.FC<PostListProps> = ({ activeTab, openModal }) => {
  const router = useRouter();

  return (
    <List>
      {dummyPosts.map((item) => (
        <ListItem key={item.id} onClick={() => router.push(``)}>
          <div>
            <Content>{item.title}</Content>
            <Meta>{item.author} · {item.date}</Meta>
            <SubMeta>
              <Like><Image src={like} alt="" width={20} height={20} /> {item.likes}</Like>
              <Like><Image src={comment} alt="" width={20} height={20} /> {item.comments}</Like>
            </SubMeta>
          </div>
          <ContentImage src={like} alt={`${item.title}`} />  {/* 이미지 경로 임의로 지정 */}
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;


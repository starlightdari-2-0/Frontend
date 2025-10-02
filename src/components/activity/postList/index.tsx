"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Content, List, ListItem, Meta, SubMeta } from "./styles";

const dummyPosts = [
  { id: 1, title: "제목제목제목", date: "2025.08.25", author: "후추자리", likes: 3, comments: 5 },
  { id: 2, title: "새로운 글 제목", date: "2025.08.22", author: "후추자리", likes: 1, comments: 2 },
];

const PostList = () => {
  const router = useRouter();

  return (
    <List>
      {dummyPosts.map((item) => (
        <ListItem key={item.id} onClick={() => router.push(``)}>
          <Content>{item.title}</Content>
          <Meta>{item.author} · {item.date}</Meta>
          <SubMeta>❤️ {item.likes} 💬 {item.comments}</SubMeta>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;


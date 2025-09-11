"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Content, List, ListItem, Meta, SubMeta } from "./styles";

const dummyComments = [
  { id: 1, content: "댓글 내용", date: "2025.08.25", author: "사자자리", comments: 3 },
  { id: 2, content: "좋은 글이네요!", date: "2025.08.21", author: "사자자리", comments: 1 },
];

const CommentList = () => {
  const router = useRouter();

  return (
    <List>
      {dummyComments.map((item) => (
        <ListItem key={item.id} onClick={() => router.push(``)}>
          <Content>{item.content}</Content>
          <Meta>{item.author} · {item.date}</Meta>
          <SubMeta>💬 {item.comments}</SubMeta>
        </ListItem>
      ))}
    </List>
  );
};

export default CommentList;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Content, List, ListItem, From } from "./styles";
import { Letter } from "../../../types/letter";

interface LetterListProps {
  activeTab?: "letter" | "memory";
  onLetterClick?: (letter: Letter) => void;
}

const dummyLetters = [
  { id: 1, title: "솜이에게", content: "잘 지내고 있어? 난 잘 지내", date: "2025.08.25", author: "콩이가" },
  { id: 2, title: "솜이에게", content: "오랜만이야!", date: "2025.08.20", author: "콩이가" },
];

const LetterList: React.FC<LetterListProps> = ({ activeTab, onLetterClick }) => {
  return (
    <List>
      {dummyLetters.map((item) => (
        <ListItem key={item.id} onClick={() => onLetterClick?.(item)}>
          <Content>{item.content}</Content>
          <From>- {item.author} - · {item.date}</From>
        </ListItem>
      ))}
    </List>
  );
};

export default LetterList;


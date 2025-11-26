"use client";

import Image from "next/image";
import down from "/public/chevron_down.svg";
import { Container, Title, Button } from "./styles";

interface HeaderProps {
  title: string;
  onTitleClick: () => void;
}

const Header = ({ title, onTitleClick }: HeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button onClick={onTitleClick}><Image alt="" src={down} height={24} width={24} /></Button>
    </Container>
  );
};

export default Header;
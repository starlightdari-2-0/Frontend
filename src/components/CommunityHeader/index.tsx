"use client";

import Image from "next/image";
import search from "/public/title_search.svg";
import { Container, Title, Button } from "./styles";

interface HeaderProps {
    title: string;
    onTitleClick: () => void;
}

const Header = ({ title, onTitleClick }: HeaderProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Button onClick={onTitleClick}><Image alt="" src={search} height={48} width={48} /></Button>
        </Container>
    );
};

export default Header;
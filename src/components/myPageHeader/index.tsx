"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import alert from "/public/title_alert.svg";
import setting from "/public/title_setting.svg";
import { useRouter } from "next/navigation";
import { Container, Title, IconGroup } from "./styles"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const router = useRouter();


    return (
        <Container>
            <Title>마이페이지</Title>
            <IconGroup>
                <Image src={alert} alt="alert" />
                <Image src={setting} alt="setting" />
            </IconGroup>
        </Container>
    );
};

export default Header;


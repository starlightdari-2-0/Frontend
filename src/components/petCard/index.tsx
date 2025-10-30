"use client";

import React, { useState } from "react";
import Image from "next/image";
import animal from "/public/animal/dog.svg";
import starCount from "/public/starCount.svg";
import more from "/public/title_more.svg";
import birthday_icon from "/public/birthday_icon.svg";
import { Container, ImageWrapper, PetImage, InfoCard, Header, Title, Row, IconWrapper, Section, Label, Value, Description, Tag, CommentSection, More } from "./styles"
import { useModalStore } from "../../store/useModalStore";
import ContextMenu from "../menu/ContextMenu";
import axios from "axios";
import { useRouter } from "next/navigation";

interface PetCardProps {
    petId: number;
    name: string;
    startDate: string;
    endDate?: string;
    animalType: string;
    breed: string;
    count: number;
    description: string;
    gender: string;
    personality: string;
    imageUrl: string;
}

const PetCard: React.FC<PetCardProps> = ({
    petId,
    name,
    startDate,
    endDate,
    animalType,
    breed,
    count,
    description,
    gender,
    personality,
    imageUrl,
}) => {
    const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
    const router = useRouter();

    const { openModal, closeModal } = useModalStore();
    const [showMenu, setShowMenu] = useState(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`${server_url}/pets/${petId}`, {
                withCredentials: true,
            });
        } catch (error) {
            console.error("동물 정보 삭제 중 오류 발생:", error);
        }
    };

    return (
        <Container>
            <ImageWrapper>
                <PetImage width={360} height={360} src={imageUrl} alt={name} />
            </ImageWrapper>
            <InfoCard>
                <Header>
                    <Title>{name}</Title>
                    <More onClick={() => setShowMenu(!showMenu)}>
                        <Image src={more} alt="more" /></More>
                    {showMenu && (
                        <ContextMenu $top="48px"
                            onEdit={() => {
                                alert("수정 페이지로 이동");
                                setShowMenu(false);
                            }}
                            onDelete={() => {
                                openModal("CONFIRM", {
                                    title: "내 별자리를 삭제하시겠습니까?",
                                    description: "삭제한 별자리는 영영 사라집니다.",
                                    onConfirm: () => {
                                        handleDelete();
                                        closeModal();
                                        router.push(`/mypage/myInfo`);
                                    },
                                });
                                setShowMenu(false);
                            }}
                        />)}
                </Header>

                <Row>
                    <IconWrapper width="328px">
                        <Image src={birthday_icon} alt="birthday" />
                        <span>
                            {startDate}
                            {endDate ? ` ~ ${endDate}` : ""}
                        </span>
                    </IconWrapper>
                </Row>

                <Row>
                    <IconWrapper width="158px">
                        <Image src={animal} alt="animal" />
                        {breed}
                    </IconWrapper>
                    <IconWrapper width="158px">
                        <Image src={starCount} alt="star" />
                        {count}개
                    </IconWrapper>
                </Row>

                <CommentSection>
                    <Label>한 줄 기록</Label>
                    <Description>{description}</Description>
                </CommentSection>

                <Section>
                    <Label>성별</Label>
                    <Value>{gender}</Value>
                </Section>

                <Section>
                    <Label>성격</Label>
                    <Tag>{personality}</Tag>
                </Section>
            </InfoCard>
        </Container>
    );
};

export default PetCard;


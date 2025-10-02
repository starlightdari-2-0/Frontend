import React from "react";
import Image from "next/image";
import animal from "/public/animal.svg";
import starCount from "/public/starCount.svg";
import more from "/public/title_more.svg";
import birthday_icon from "/public/birthday_icon.svg";
import { Container, ImageWrapper, PetImage, InfoCard, Header, Title, Row, IconWrapper, Section, Label, Value, Description, Tag, CommentSection } from "./styles"


interface PetCardProps {
    name: string;
    startDate: string;
    endDate?: string;
    breed: string;
    count: number;
    description: string;
    gender: string;
    personality: string;
    imageUrl: string;
}

const PetCard: React.FC<PetCardProps> = ({
    name,
    startDate,
    endDate,
    breed,
    count,
    description,
    gender,
    personality,
    imageUrl,
}) => {
    return (
        <Container>
            <ImageWrapper>
                <PetImage width={360} height={360} src={imageUrl} alt={name} />
            </ImageWrapper>
            <InfoCard>
                <Header>
                    <Title>{name}</Title>
                    <Image src={more} alt="more" style={{ position: "absolute", right: "0px" }} />
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


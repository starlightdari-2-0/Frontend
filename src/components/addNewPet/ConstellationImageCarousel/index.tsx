"use client";

import React, { useEffect, useState } from "react"
import Image from "next/image";
import left from "/public/chevron_left.svg";
import right from "/public/chevron_right.svg";
import { usePetStore } from "../../../store/petStore";
import { Container, ArrowButton, Dot, Dots, ImageWrapper, ImageButton, SlideImage, SlideWrapper } from "./styles";

export interface ConstellationData {
  con_id: number;
  code: string;
  thumbnail_img: string;
}

interface ImageCarouselProps {
  initialConstellations: ConstellationData[];
}

export default function ImageCarousel({ initialConstellations }: ImageCarouselProps) {
  const { constellations, constellation_id, setConstellations, setConstellationId } = usePetStore();

  useEffect(() => {
    if (initialConstellations && initialConstellations.length > 0) {
      setConstellations(initialConstellations);
    }
  }, [initialConstellations, setConstellations]);

  // 선택된 별자리를 저장할 상태
  const [currentConIndex, setCurrentConIndex] = useState(0);

  // 현재 보여줄 별자리 객체
  const currentCon = constellations[currentConIndex];

  if (!constellations || constellations.length === 0) {
    return <p>불러올 별자리 데이터가 없습니다.</p>;
  }

  const prevSlide = () => {
    setCurrentConIndex((prev) => (prev === 0 ? constellations.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentConIndex((prev) => (prev === constellations.length - 1 ? 0 : prev + 1))
  }

  return (
    <Container>
      <SlideWrapper>
        <ArrowButton onClick={prevSlide} disabled={constellations.length <= 1}>
          <Image src={left} alt="" />
        </ArrowButton>
        <ImageWrapper selected={constellation_id === currentCon.con_id}>
          {currentCon && currentCon.thumbnail_img && (
            <ImageButton onClick={() => setConstellationId(currentCon.con_id)} >
              <SlideImage
                src={currentCon.thumbnail_img}
                alt={`${currentCon.code}`}
                width={220}
                height={300}
              />
            </ImageButton>
          )}
        </ImageWrapper>
        <ArrowButton onClick={nextSlide} disabled={constellations.length <= 1}>
          <Image src={right} alt="" />
        </ArrowButton>
      </SlideWrapper>

      <Dots>
        {constellations.map((_, idx) => (
          <Dot key={idx} active={idx === currentConIndex} />
        ))}
      </Dots>
    </Container>
  )
}
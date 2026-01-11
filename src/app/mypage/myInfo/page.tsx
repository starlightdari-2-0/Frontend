"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../components/myPageHeader";
import UserInfo from "../../../components/userInfo";
import ConstellationList from "../../../components/myConstellationList";
import ActivityMenu from "../../../components/myActivityMenu";
import NavBar from "../../../components/navBar";
import Image from "next/image";
import arrow from "/public/arrow_right.svg";
import { Arrow, Container, Section, SectionHeader, SectionTitle } from "./styles";

interface Constellation {
  id: number;
  name: string;
  count: number;
  imageUrl: string;
}

export default function Page() {
  const [constellations, setConstellations] = useState<Constellation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchConstellations = async () => {
      try {
        setIsLoading(true);
        const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
        const response = await axios.get(`${server_url}/pets`, {
          withCredentials: true,
          headers: { "Content-Type": "application/json;charset=utf-8" },
        });
        // TODO: count는 백엔드에서 추가될 예정이므로 현재는 0으로 임시 설정
        const mappedData: Constellation[] = response.data.map((pet: any) => ({
          id: pet.pet_id,
          name: pet.pet_name,
          imageUrl: pet.pet_svg,
          count: 0, // TODO: 백엔드 업데이트 후 실제 count 값으로 변경
        }));
        setConstellations(mappedData);
        setIsError(false);
      } catch (error) {
        console.error("별자리 데이터 로드 실패:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConstellations();
  }, []);


  return (
    <Container>
      <Header />
      <UserInfo />
      <Section>
        <SectionHeader>
          <SectionTitle>나의 활동</SectionTitle>
        </SectionHeader>
        <ActivityMenu />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>나의 별자리</SectionTitle>
          <Arrow><Image src={arrow} alt="move to constellation page" /></Arrow>
        </SectionHeader>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : isError ? (
          <p>별자리 정보를 불러올 수 없습니다.</p>
        ) : (
          <ConstellationList constellations={constellations} />
        )}
      </Section>

      <NavBar />
    </Container>
  );
};